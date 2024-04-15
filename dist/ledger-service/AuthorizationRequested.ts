import {AuthorizationType} from "./AuthorizationType";

export type AuthorizationRequested = {
  amountCents: number;
  externalCardId: string;
  merchantId: string;
  merchantMcc: string;
  merchantName: string;
  merchantAddress: string | null;
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
