export type Transaction = {
  id: string;
  amountCents: number;
  balanceOwedCents: number;
  accountId: string;
  cardId: string | null;
  direction: 'Credit' | 'Debit';
  description: string;
  type: string;
  eventId: string;
  externalId: string | null;
  merchantName: string | null;
  createdAt: string;
  originalCurrencyCode: string | 'USD';
  merchantMcc: string | null;
  merchantCity: string | null;
  merchantState: string | null;
  merchantCountryCode: string | null;
  merchantAddress: string | null;
  merchantId: string | null;
}