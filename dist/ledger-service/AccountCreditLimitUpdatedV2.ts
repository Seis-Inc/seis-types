export type AccountCreditLimitUpdatedV2 = {
  id: string;
  limitCents: number;
  securedAmountCents: number;
  unsecuredAmountCents: number;
  paymentId: string | null;
}