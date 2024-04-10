type TransactionType = 'Payment' | 'Interest' | 'CardTransaction'

export type TransactionCreated = {
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
}



