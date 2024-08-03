import { CreditCardDispute } from "../credit-cards/disputes";

export type DisputeAnswer = {
  id: string;
  question: string;
  questionEs: string;
  answer: string;
  answerEs: string;
  createdAt: string;
  updatedAt: string;
  dispute?: CreditCardDispute;
};
