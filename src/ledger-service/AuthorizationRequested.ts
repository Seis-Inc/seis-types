export type AuthorizationRequested = {
  amountCents: number;
  accountId: string;
  merchantMcc: string;
  merchantName: string;
  network: string;
  externalId: string;
}
