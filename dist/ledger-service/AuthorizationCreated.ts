import {AuthorizationType} from "./AuthorizationType";

export type AuthorizationCreated = {
  amountCents: number;
  accountId: string;
  merchantMcc: string;
  merchantName: string;
  merchantAddress: string | null;
  merchantCity: string | null;
  merchantState: string | null;
  merchantZip: string | null;
  merchantCountryCode: string | null;
  cardId: string;
  network: string;
  externalId: string;
  acquirerFeeCents:number;
  type:AuthorizationType;
}
