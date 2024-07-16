import {AuthorizationType} from "./AuthorizationType";

export type AuthorizationRequestDeclined = {
  amountCents: number;
  requestedAmountCents: number;
  externalCardId: string;
  merchantId: string;
  merchantMcc: string;
  merchantName: string | null;
  merchantAddress: string | null;
  merchantCity: string | null;
  merchantState: string | null;
  merchantZip: string | null;
  merchantCountryCode: string | null;
  network: string | null;
  acquirerFeeCents: number | null;
  originalCurrencyCode: string | 'USD';
  accountId: string | null;
  cardLast4: string | null;
  type: AuthorizationType;
  id: string;
  declineReason: string;
}
