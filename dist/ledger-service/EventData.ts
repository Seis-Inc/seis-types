import {AccountCreated} from "./AccountCreated";
import {AccountCreditLimitUpdated} from "./AccountCreditLimitUpdated";
import {AuthorizationAmountUpdated} from "./AuthorizationAmountUpdated";
import {AuthorizationCancelationRequested} from "./AuthorizationCancelationRequested";
import {AuthorizationExpired} from "./AuthorizationExpired";
import {AuthorizationRequested} from "./AuthorizationRequested";
import {CreditCardCreated} from "./CreditCardCreated";
import {TransactionCreated} from "./TransactionCreated";
import { TransactionDisputed } from "./TransactionDisputed";
import {AuthorizationRequestDeclined} from "./AuthorizationRequestDeclined";

export type EventData =
  | AccountCreated
  | AccountCreditLimitUpdated
  | AuthorizationAmountUpdated
  | AuthorizationCancelationRequested
  | AuthorizationExpired
  | AuthorizationRequested
  | AuthorizationRequestDeclined
  | CreditCardCreated
  | TransactionCreated
  | TransactionDisputed;