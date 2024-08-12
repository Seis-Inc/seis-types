import {MerchantType} from "./MerchantType";

export type Transaction = {
  id: string;
  amountCents: number;
  balanceOwedCents: number;
  accountId: string;
  cardId: string | null;
  cardLast4: string | null;
  direction: 'Credit' | 'Debit';
  description: string;
  summary: string;
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
  category: MerchantType | null;
  ecommerce: boolean;
  cardPresent: boolean;
  pinEntered: boolean;
  recurring: boolean;
  digitalWallet: string | null;
  paymentMethod: string | null;
  authorizationId: string | null;
  acquiererReferenceNumber: string | null;
}