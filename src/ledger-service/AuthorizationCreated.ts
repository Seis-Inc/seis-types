import {AuthorizationType} from "./AuthorizationType";

export type AuthorizationCreated = {
  amountCents: number;
  accountId: string;
  merchantMcc: string | null;
  merchantName: string | null;
  merchantAddress: string | null;
  merchantCity: string | null;
  merchantState: string | null;
  merchantZip: string | null;
  merchantCountryCode: string | null;
  cardId: string | null;
  network: string;
  id: string;
  acquirerFeeCents:number | null;
  type:AuthorizationType;
}
