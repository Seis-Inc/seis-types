import { Uuid } from "../../general";
import { CasapDisputeReason } from "./CasapDisputeReason";
import { DisputeQuestionnaireQuestion } from "./DisputeQuestionnaireQuestion";

export type DisputeReason = {
  id: Uuid;
  casapReason: CasapDisputeReason;
  reason: string;
  reasonEs: string;
  firstQuestionId?: string;
  questionnaireQuestions?: DisputeQuestionnaireQuestion[];
  createdAt: string;
  updatedAt: string;
};
