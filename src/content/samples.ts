/**
 * Before and after excerpts.
 *
 * HOW TO SWAP IN A REAL SAMPLE
 * 1. Get written permission from the student.
 * 2. Replace `before` and `after` with the excerpt (keep it under ~120 words each).
 * 3. Replace `changeNotes` with two to four specific observations.
 * 4. Set `placeholder` to false. The UI hides the PLACEHOLDER label when false.
 */
export interface Sample {
  id: string;
  /** The prompt the student was answering. */
  prompt: string;
  /** School name, or "Common App". */
  school: string;
  wordLimit: number;
  before: string;
  after: string;
  /** What changed and why. One sentence each. */
  changeNotes: string[];
  /** True until a real, permissioned excerpt replaces this text. */
  placeholder: boolean;
}

export const samples: Sample[] = [
  {
    id: "placeholder-why-us",
    placeholder: true, // PLACEHOLDER: replace with a permissioned excerpt
    prompt: "Why do you want to attend this university?",
    school: "PLACEHOLDER University",
    wordLimit: 150,
    before:
      "PLACEHOLDER. Ever since I was young, I have always been passionate about learning and growing as a person. Your university has amazing programs and a beautiful campus, and I know that I would thrive in such a supportive community. I believe that attending would truly help me achieve my dreams.",
    after:
      "PLACEHOLDER. I want to take Professor Okafor's soft robotics lab because the gripper in her 2024 paper solves the same slippage problem I hit building a syringe stabilizer last spring. Outside the lab, I would join the student print shop. I have run a press before and yours takes walk-ins on Thursdays.",
    changeNotes: [
      "Cut every sentence that could be sent to any school unchanged.",
      "Replaced the word amazing with a lab, a paper and a problem the student actually had.",
      "Added one non-academic detail with a verifiable fact in it.",
    ],
  },
  {
    id: "placeholder-community",
    placeholder: true, // PLACEHOLDER: replace with a permissioned excerpt
    prompt: "Describe a community you belong to and your role in it.",
    school: "PLACEHOLDER College",
    wordLimit: 250,
    before:
      "PLACEHOLDER. Volunteering at the hospital taught me so much about empathy and compassion. Seeing the patients smile made every hour worth it, and I learned that even small acts of kindness can make a huge difference in someone's day. This experience shaped who I am today.",
    after:
      "PLACEHOLDER. On Tuesdays I restock the fourth floor playroom. The rule is that nothing with small parts goes in the toddler bin, so I spend twenty minutes sorting Lego by size before anyone arrives. The kids do not know my name. They know that the big bricks are always in the red box.",
    changeNotes: [
      "Moved from what the experience meant to what the student did, on which day, with what objects.",
      "Removed the closing sentence that told the reader how to feel.",
      "Kept the last line short so the essay ends on an image instead of a lesson.",
    ],
  },
];
