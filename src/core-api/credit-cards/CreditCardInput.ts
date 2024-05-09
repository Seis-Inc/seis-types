import {CreditCardLithicState} from "./CreditCardLithicState";

export type CreditCardInput = {
    id: string;
    userId: string;
    type: string;
    status: string;
    lithicState: CreditCardLithicState;
    design: string;
    expirationDate: string;
    last4Digits: string;
    bin: string;
    shippingMethod?: string | null;
    token: string;
    digitalCardArtToken?: string | null;
    creditCardAccountId: string;
    activatedAt?: string | null;
    canceledAt?: string | null;
    cancelationReason?: string | null;
    expeditedOrder?: boolean;
  };