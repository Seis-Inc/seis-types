import {ListOptions} from "../common/ListOptions";
import {CreditCardType} from "./CreditCardType";

export type CreditCardFilter = {userId?: string, token?: string, creditCardAccountId?: string, cardType?: CreditCardType} & ListOptions;

