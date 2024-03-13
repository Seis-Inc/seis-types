type TransactionDirection = 'Debit' | 'Credit'

export type TransactionEvent = {
	accountId: string,
	amountCents: string,
	direction: TransactionDirection,
	merchantName: string,
	merchantCode: string,
	externalId: string | null,
}