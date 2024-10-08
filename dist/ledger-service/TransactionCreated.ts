import {TransactionType} from "./TransactionType";

export type TransactionCreated = {
  id: string,
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
  cardLast4: string | null
  ecommerce: boolean | null;
  cardPresent: boolean | null;
  pinEntered: boolean | null;
  recurring: boolean | null;
  digitalWallet: string | null;
  paymentMethod: string | null;
  clearingEventToken: string | null;
  acquirerReferenceNumber: string | null;
}



