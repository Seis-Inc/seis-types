import { Dispute } from "../../ledger-service";
import { DisputeReason } from "./DisputeReason";

export type DisputeAnswer = {
  id: string;
  question: string;
  questionEs: string;
  answer: string;
  answerEs: string;
  createdAt: string;
  updatedAt: string;
  disputeReason?: DisputeReason;
  dispute?: Dispute;
};
