import {CreditCard} from "./CreditCard";

export type CreditCardPatch = Partial<CreditCard> & { id: string };
