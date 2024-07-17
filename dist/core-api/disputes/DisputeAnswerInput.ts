export type DisputeAnswerInput = {
  userId: string;
  question: string;
  questionEs: string;
  answer: string;
  answerEs: string;
  createdAt?: string;
  updatedAt?: string;
  disputeReasonId: string;
  disputeId: string;
};
