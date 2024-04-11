import {AuthorizationType} from "./AuthorizationType";

export type AuthorizationCreated = {
  amountCents: number;
  accountId: string;
  merchantMcc: string;
  merchantName: string;
  network: string;
  externalId: string;
  acquirerFeeCents:number;
  type:AuthorizationType;
}
