// Client testimonials. Only genuine quotes, used with the client's permission.
// Attribution describes the client without identifying them unless they agreed,
// e.g. "Owner, accounting practice, North York". Light typo fixes only, never change meaning.
// The Testimonials section stays hidden while this list is empty.

export interface Testimonial {
  quote: string;
  attribution: string;
}

export const testimonials: Testimonial[] = [];
