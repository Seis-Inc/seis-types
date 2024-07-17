import { Uuid } from "../../general";
import { CasapDisputeReason } from "./CasapDisputeReason";

export type DisputeReason = {
  id: Uuid;
  casapReason: CasapDisputeReason;
  reason: string;
  reasonEs: string;
  firstQuestionId?: string;
  createdAt: string;
  updatedAt: string;
};
