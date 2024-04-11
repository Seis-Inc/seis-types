import {AuthorizationType} from "./AuthorizationType";

export type AuthorizationRequested = {
  amountCents: number;
  externalAccountId: string;
  merchantId: string;
  merchantMcc: string;
  merchantName: string;
  network: string;
  acquirerFeeCents: number;
  type: AuthorizationType;
  externalId: string;
}
