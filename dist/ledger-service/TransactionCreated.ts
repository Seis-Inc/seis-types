type TransactionType = 'Payment' | 'Interest' | 'CardTransaction' | 'Fee' | 'Adjustment'

export type TransactionCreated = {
  toId: string | null,
  fromId: string | null,
  authorizationId: string | null,
  fromAccountId: string,
  fromCardId: string | null,
  toAccountId: string,
  toCardId: string | null,
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
  createdAt?: string | null;
}



