type TransactionType = 'Payment' | 'Interest' | 'CardTransaction' | 'Fee' | 'Adjustment'

export type TransactionCreated = {
  id: string | null,
  authorizationId: string | null,
  accountId: string,
  cardId: string | null,
  // This directly increases or decreases the balanceOwedCents
  // positive amounts increase the balanceOwedCents and negative amounts decrease the balanceOwedCents
  // Example: payments will be negative and card transactions will be positive
  amountCents: number,
  description: string,
  externalId: string | null,
  type: TransactionType,
  idempotencyKey: string | null,
  originalCurrencyCode: string | 'USD',
  acquirerFeeCents: number;
  originalCreatedAt?: string;
  network?: string | null;
  merchantId?: string | null;
  merchantName?: string | null;
  merchantAddress?: string | null;
  merchantCity?: string | null;
  merchantState?: string | null;
  merchantZip?: string | null;
  merchantCountryCode?: string | null;
  merchantMcc?: string | null;
  cardLast4:string | null
}



