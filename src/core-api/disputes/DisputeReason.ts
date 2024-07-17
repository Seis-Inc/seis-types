import { CasapDisputeReason } from "./CasapDisputeReason";

export type DisputeReason = {
  id: string;
  casapReason: CasapDisputeReason;
  reason: string;
  reasonEs: string;
  createdAt: string;
  updatedAt: string;
};
