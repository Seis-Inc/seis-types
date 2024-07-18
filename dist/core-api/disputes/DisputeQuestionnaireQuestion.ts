import { Uuid } from "../../general";
import { DisputeQuestionnaireAnswer } from "./DisputeQuestionnaireAnswer";

export type DisputeQuestionnaireQuestion = {
  id: Uuid;
  question: string;
  questionEs: string;
  answers: DisputeQuestionnaireAnswer[];
  createdAt: string;
  updatedAt: string;
};
