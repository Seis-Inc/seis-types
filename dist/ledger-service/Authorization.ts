import {AuthorizationStatus} from "./AuthorizationStatus";
import {AuthorizationType} from "./AuthorizationType";
import {MerchantType} from "./MerchantType";

export type Authorization = {
  id: string;
  amountCents: number;
  currentHoldAmountCents: number;
  acquirerFeeCents: number | null;
  transactionId: string | null;
  externalId: string;
  accountId: string;
  status: AuthorizationStatus;
  type: AuthorizationType;
  createdAt: string;
  merchantMcc: string | null;
  merchantName: string | null;
  merchantId: string | null;
  merchantAddress: string | null;
  merchantCity: string | null;
  merchantState: string | null;
  merchantZip: string | null;
  merchantCountryCode: string | null;
  cardId: string | null;
  network: string | null;
  originalCurrencyCode: string;
  category: MerchantType | null;
}