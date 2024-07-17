import { CasapDisputeReason } from "./CasapDisputeReason";

export type DisputeReasonInput = {
  casapReason: CasapDisputeReason;
  reason: string;
  createdAt: string;
  updatedAt: string;
  type: string;
};
