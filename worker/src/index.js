// teli.ca contact form Worker.
// Receives the form post, checks the honeypot and Turnstile, validates the fields,
// and sends the message through Resend. Never logs names, emails or message content.

const LIMITS = { name: 100, email: 254, message: 5000 };
const MAX_BODY_BYTES = 20000; // A real submission is a few KB.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Single-line fields: collapse line breaks and tabs so they can't break headers.
function cleanLine(value, max) {
  return (value ?? "").toString().replace(/[\r\n\t]+/g, " ").trim().slice(0, max);
}

// Verifies the Turnstile token and that the check ran on one of our own hostnames.
async function verifyTurnstile(token, ip, secret, allowedHosts) {
  if (!token || !secret) return false;
  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
    });
    const data = await res.json();
    return data.success === true && allowedHosts.includes(data.hostname);
  } catch {
    return false;
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname !== "/contact") {
      return new Response("Not found", { status: 404 });
    }
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: { Allow: "POST" } });
    }

    // Only accept posts from our own site. Redirects go back to that same origin.
    const origin = request.headers.get("Origin") ?? "";
    const allowed = (env.ALLOWED_ORIGINS ?? "").split(",").map((s) => s.trim()).filter(Boolean);
    if (!allowed.includes(origin)) {
      return new Response("Forbidden", { status: 403 });
    }
    const allowedHosts = allowed.map((o) => new URL(o).hostname);
    const back = (path) => Response.redirect(`${origin}${path}`, 303);

    // Refuse oversized requests before reading them.
    const declared = Number(request.headers.get("Content-Length") ?? "0");
    if (declared > MAX_BODY_BYTES) {
      return back("/contact/error/");
    }

    let form;
    try {
      form = await request.formData();
    } catch {
      return back("/contact/error/");
    }

    // Honeypot: real people never fill this in. Pretend success so bots learn nothing.
    if (cleanLine(form.get("website"), 200) !== "") {
      return back("/contact/thanks/");
    }

    const name = cleanLine(form.get("name"), LIMITS.name);
    const email = cleanLine(form.get("email"), LIMITS.email);
    const message = (form.get("message") ?? "").toString().trim().slice(0, LIMITS.message);

    if (!name || !email || !message || !EMAIL_RE.test(email)) {
      return back("/contact/error/");
    }

    const token = (form.get("cf-turnstile-response") ?? "").toString();
    const human = await verifyTurnstile(token, request.headers.get("CF-Connecting-IP"), env.TURNSTILE_SECRET, allowedHosts);
    if (!human) {
      return back("/contact/error/");
    }

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: env.FROM_ADDRESS,
          to: [env.CONTACT_TO],
          reply_to: email,
          subject: `New message from ${name} via teli.ca`,
          text: `Name: ${name}\nEmail: ${email}\n\n${message}\n`,
        }),
      });
      if (!res.ok) {
        console.error("Resend rejected the message", res.status);
        return back("/contact/error/");
      }
    } catch {
      console.error("Could not reach Resend");
      return back("/contact/error/");
    }

    return back("/contact/thanks/");
  },
};
