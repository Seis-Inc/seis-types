import {ListOptions} from "../common/ListOptions";
import {CreditCardType} from "./CreditCardType";
import {CreditCardShippingStatus} from "./CreditCardShippingStatus";

export type CreditCardFilter = {
    userId?: string,
    token?: string,
    creditCardAccountId?: string,
    cardType?: CreditCardType,
    estimatedDeliveredToHomeAtIsNull?: boolean,
    shippingStatus?: CreditCardShippingStatus,
    isNotClosedAndHasShippedWithinLastMonth?: boolean
} & ListOptions;

