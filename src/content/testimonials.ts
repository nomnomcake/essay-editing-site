export interface Testimonial {
  id: string;
  quote: string;
  /** First name and admitted school. */
  attribution: string;
  /** 0 to 5. */
  rating: number;
  /** True until a real quote with permission replaces this. */
  placeholder: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    placeholder: true, // TODO PLACEHOLDER: real quote with written permission
    quote:
      "The first comment was that my second paragraph answered a different prompt. It did. Fixing that fixed the whole essay.",
    attribution: "Priya, admitted to PLACEHOLDER",
    rating: 5,
  },
  {
    id: "t2",
    placeholder: true, // TODO PLACEHOLDER: real quote with written permission
    quote:
      "I sent four supplements. Two came back with more comments than text. The other two came back with one line each. Both were right.",
    attribution: "Marcus, admitted to PLACEHOLDER",
    rating: 5,
  },
  {
    id: "t3",
    placeholder: true, // TODO PLACEHOLDER: real quote with written permission
    quote:
      "Nothing got rewritten for me. Every suggestion was a question I had to answer myself, which is why it still sounded like me.",
    attribution: "Lena, admitted to PLACEHOLDER",
    rating: 4,
  },
];
