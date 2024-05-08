import {CoreCreditCard} from "./CoreCreditCard";

export type CreditCardPatch = Partial<CoreCreditCard> & { id: string };
