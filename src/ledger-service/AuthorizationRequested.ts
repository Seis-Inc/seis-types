import {AuthorizationType} from "./AuthorizationType";

export type AuthorizationRequested = {
  amountCents: number;
  externalCardId: string;
  merchantId: string | null;
  merchantMcc: string | null;
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
  type: AuthorizationType;
  id: string;
}
