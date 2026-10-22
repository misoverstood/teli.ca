// Site-wide settings. This repo is public: never put secrets or private addresses here.

export const site = {
  url: "https://teli.ca",
  // Public URL of the contact form Worker (worker/ folder in this repo).
  contactEndpoint: "https://teli-contact-form.misoverstood.workers.dev/contact",
  // Turnstile site keys are public by design. The secret key lives only in the Worker.
  turnstileSiteKey: "0x4AAAAAAFVK0CgKi8kekZy_",
  // Cloudflare's published test key, used on localhost. Always passes the widget,
  // but the Worker's real secret rejects its token, so local submits land on /contact/error.
  turnstileTestSiteKey: "1x00000000000000000000AA",
  // Cloudflare Web Analytics beacon token. Public by design; loaded in production builds only.
  cfAnalyticsToken: "15787aca710e40c08a30b69fff51b92d",
};
