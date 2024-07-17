import { ListOptions } from "../common/ListOptions";

export type DisputeAnswerFilter = {
  userId?: string;
  disputeReasonId?: string;
  disputeId?: string;
} & ListOptions;
