import {CreditCardType} from "./CreditCardType";
import {CreditCardLithicState} from "./CreditCardLithicState";
import {CreditCardStatus} from "./CreditCardStatus";

export type CoreCreditCard = {
  id: string;
  userId: string;
  type: CreditCardType;
  status: CreditCardStatus;
  lithicState: CreditCardLithicState;
  design: string;
  expirationDate: string;
  last4Digits: string;
  bin: string;
  shippingMethod: string | null;
  token: string;
  digitalCardArtToken: string | null;
  creditCardAccountId: string;
  activatedAt: string | null;
  canceledAt: string | null;
  cancelationReason: string | null;
  createdAt: string;
  updatedAt: string;
  expeditedOrder: boolean;
};


