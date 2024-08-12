import {ListOptions} from "../common/ListOptions";
import {CreditCardType} from "./CreditCardType";
import {CreditCardShippingStatus} from "./CreditCardShippingStatus";
import {CreditCardLithicState} from "./CreditCardLithicState";

export type CreditCardFilter = {
    userId?: string,
    token?: string,
    creditCardAccountId?: string,
    cardType?: CreditCardType,
    estimatedDeliveredToHomeAtIsSet?: false,
    shippingMethod?: CreditCardShippingStatus,
    hasShippedWithinLastMonth?: true,
    lithicStateNotIn?: CreditCardLithicState[]
} & ListOptions;

