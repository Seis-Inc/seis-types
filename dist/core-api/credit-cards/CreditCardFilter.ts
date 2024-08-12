import {ListOptions} from "../common/ListOptions";
import {CreditCardType} from "./CreditCardType";
import {CreditCardShippingStatus} from "./CreditCardShippingStatus";

export type CreditCardFilter = {
    userId?: string,
    token?: string,
    creditCardAccountId?: string,
    cardType?: CreditCardType,
    estimatedDeliveredToHomeAtIsSet?: boolean,
    shippingMethod?: CreditCardShippingStatus,
    isNotClosedAndHasShippedWithinLastMonth?: boolean
} & ListOptions;

