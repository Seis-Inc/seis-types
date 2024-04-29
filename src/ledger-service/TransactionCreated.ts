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
  merchantLocation: string | null,
  merchantName: string | null,
  merchantCode: string | null,
  externalId: string | null,
  type: TransactionType,
  idempotencyKey: string | null,
  originalCurrencyCode: string | 'USD',
}



