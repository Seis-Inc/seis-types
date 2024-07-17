import { DisputeQuestionnaireAnswer } from "./DisputeQuestionnaireAnswer";

export type DisputeQuestionnaire = {
  id: string;
  question: string;
  answers: DisputeQuestionnaireAnswer[];
  createdAt: string;
  updatedAt: string;
};
