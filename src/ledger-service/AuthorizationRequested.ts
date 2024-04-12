import {AuthorizationType} from "./AuthorizationType";

export type AuthorizationRequested = {
  amountCents: number;
  externalAccountId: string;
  merchantId: string;
  merchantMcc: string;
  merchantName: string;
  merchantCity: string | null;
  merchantState: string | null;
  merchantZip: string | null;
  merchantCountryCode: string | null;
  cardId: string;
  network: string;
  acquirerFeeCents: number;
  type: AuthorizationType;
  externalId: string;
}
