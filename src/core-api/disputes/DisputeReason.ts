import { Uuid } from "../../general";
import { CasapDisputeReason } from "./CasapDisputeReason";

export type DisputeReason = {
  id: Uuid;
  casapReason: CasapDisputeReason;
  reason: string;
  reasonEs: string;
  createdAt: string;
  updatedAt: string;
  types: ("Credit"|"Debit")[]
};
