export type FaqCategory =
  | "the edit"
  | "timing"
  | "money"
  | "getting started"
  | "policy";

export interface Question {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
}

export const faqCategories: FaqCategory[] = [
  "the edit",
  "timing",
  "money",
  "getting started",
  "policy",
];

export const faq: Question[] = [
  {
    id: "what-is-included",
    category: "the edit",
    question: "What does an edit actually include?",
    answer:
      "You share a Google Doc. I read the prompt, then the essay, then I leave two kinds of marks. Line edits fix sentences that are unclear, padded or off tone. Margin comments explain structural problems, like a story that starts too late or a paragraph that answers a different prompt. You get a short note at the end listing the three changes that matter most. Every edit is a suggestion in your document. You accept or reject each one.",
  },
  {
    id: "integrity",
    category: "policy",
    question: "Will you write my essay?",
    answer:
      "No, and that is the point of hiring an editor rather than a ghostwriter. Colleges require that the application be your own work, and a reader can tell when the voice on the page belongs to an adult who does this for a living. I edit and comment on what you wrote. The ideas, the sentences and the final decisions stay yours, which is why the essay still sounds like you in an interview. That is what makes it work.",
  },
  {
    id: "payment",
    category: "money",
    question: "How does payment work?",
    answer:
      "Submit the intake form first. I reply by email within one business day to confirm I can take the job and the price. Then you pay through a Stripe link. I open your document after payment clears. There is no account and no subscription.",
  },
  {
    id: "turnaround",
    category: "timing",
    question: "How long does a round take?",
    answer:
      "Each package lists its turnaround in days. The clock starts when I confirm I have your draft and payment, not when you submit the form. A single supplement comes back within four days. The full application package returns each round within ten days. If I am ahead of schedule you get it sooner.",
  },
  {
    id: "rounds",
    category: "the edit",
    question: "How many rounds do I get?",
    answer:
      "Two rounds for supplements, three for the personal statement. A round means I edit, you revise, and I read it again. Most essays are done in two. If you want more after your rounds are used, you can buy a single supplement edit for the same essay.",
  },
  {
    id: "what-i-need",
    category: "getting started",
    question: "What do you need from me to start?",
    answer:
      "Four things. The exact prompt and word limit for each essay. A Google Doc link with edit access turned on. Your deadline for each school. And one honest sentence about what you want the essay to say about you. The intake form asks for all of these.",
  },
  {
    id: "guarantee",
    category: "policy",
    question: "Do you guarantee admission?",
    answer:
      "No. Nobody honest can. An essay is one input among grades, scores, recommendations and institutional priorities that neither of us controls. What I can promise is that your essay will be clearer, more specific and more yours than the draft you started with.",
  },
  {
    id: "refunds",
    category: "money",
    question: "Do you give refunds?",
    answer:
      "Full refund if I have not started reading your draft. Once I have returned a first round, the work is done and the fee is not refundable. If I cannot take your job because of my schedule, you are refunded in full before I open your document.",
  },
  {
    id: "no-draft",
    category: "getting started",
    question: "What if I have no draft yet?",
    answer:
      "Pick the full application package or the personal statement deep dive. Both start with a call where I ask questions and take notes, then you go write a first draft from those notes. I do not write it for you. For a single supplement, I need a draft, however rough. A rough draft with a real idea is better than a polished one with none.",
  },
  {
    id: "rush",
    category: "timing",
    question: "Can you do it faster?",
    answer:
      "Sometimes. If your first deadline is under 72 hours away when you submit the intake form, the form shows a rush note and the price is 1.5 times the package price. Whether I can take a rush job depends on what is already in my queue, so I confirm by email before you pay.",
  },
  {
    id: "missed-deadline",
    category: "timing",
    question: "What happens if I miss my own deadline?",
    answer:
      "Your deadlines are yours to track. I list every date you give me and I return work within the promised turnaround, but I cannot submit anything on your behalf. If you send a draft late, the turnaround still counts from when I receive it. If that lands after your deadline, tell me and I will say honestly whether rush pricing can save it or whether you should submit what you have.",
  },
  {
    id: "international",
    category: "getting started",
    question: "Do you work with international applicants?",
    answer:
      "Yes. Most of my international clients are applying to US schools and writing in English as a second or third language. I edit for clarity, not for a particular accent, and I flag idioms that will read wrong to an American admissions reader. Time zones are not a problem because everything happens in the document.",
  },
  {
    id: "after",
    category: "policy",
    question: "What happens to my draft after we finish?",
    answer:
      "It stays in your Google Doc, which you own. I remove my access when the last round is done. I do not keep copies, I do not reuse your essay as a sample, and I do not share it with other students. If I ever want to quote a sentence on this site, I will ask you first in writing.",
  },
  {
    id: "scope",
    category: "the edit",
    question: "Do you also edit the activities list or the additional information section?",
    answer:
      "Not as part of these packages. If you want a quick read of your activities list, mention it in the intake form and I will quote it separately.",
  },
];

export const getQuestion = (id: string) => faq.find((q) => q.id === id);
