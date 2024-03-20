import {NetworkUserOptions} from "./NetworkUserOptions";
import {NetworkPaymentStatus} from "./NetworkPaymentStatus";
export interface NetworkPayment {
  id: string;
  sendingUserId: string;
  sendingUserPhone: string;
  receivingUserId: string;
  receivingUserPhone: string;
  description: string;
  status: NetworkPaymentStatus;
  effectiveStatus: string;
  unitPaymentId: string | null;
  tabapayTransactionId: string;
  tabapayIdempotencyKey: string;
  accountId?: string;
  tabapayApprovalCode?: string;
  tabapayAccountId?: string;
  debitCardId?: string;
  networkUser: NetworkUserOptions;

  tabapayAmountCents: number;
  displayAmountCents: number;
  feeForClaimingInstantlyCents: number;
  amountPaidCents: number;
  amountReceivedCents: number;
  networkPaymentFeeId: string;
  paymentType?: string;

  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  completedAt: string | null;
  peerToPeerPaymentId: string | null;
  receivingUserFullName: string | null;
  sendingUserFullName: string | null;

  deletedReceivingUserId?: string;
  deletedSendingUserId?: string;
  startedAsRequest: boolean;
  linkUrl: string;

  eci3ds: string | null;
  ucaf3ds: string | null;
  xid3ds: string | null;
  dsTransactionId3ds: string | null;
  chargebackOn: string | null;
  id3ds: string | null;
}