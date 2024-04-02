export type AuthorizationRequested = {
  amountCents: number;
  accountId: string;
  merchantId: string;
  merchantMcc: string;
  merchantName: string;
  network: string;
  externalId: string;
}
