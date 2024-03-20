"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardAccountScheduledPaymentType = exports.CreditCardAccountScheduledPaymentAmountType = exports.CreditCardAccountStatus = void 0;
var CreditCardAccountStatus;
(function (CreditCardAccountStatus) {
    CreditCardAccountStatus["Open"] = "Open";
    CreditCardAccountStatus["Closed"] = "Closed";
    CreditCardAccountStatus["Frozen"] = "Frozen";
})(CreditCardAccountStatus || (exports.CreditCardAccountStatus = CreditCardAccountStatus = {}));
;
var CreditCardAccountScheduledPaymentAmountType;
(function (CreditCardAccountScheduledPaymentAmountType) {
    CreditCardAccountScheduledPaymentAmountType["MinimumPayment"] = "MinimumPayment";
    CreditCardAccountScheduledPaymentAmountType["FullStatementBalance"] = "FullStatementBalance";
    CreditCardAccountScheduledPaymentAmountType["MinimumPaymentPlus"] = "MinimumPaymentPlus";
    CreditCardAccountScheduledPaymentAmountType["FullAccountBalance"] = "FullAccountBalance";
    CreditCardAccountScheduledPaymentAmountType["CustomPayment"] = "CustomPayment";
})(CreditCardAccountScheduledPaymentAmountType || (exports.CreditCardAccountScheduledPaymentAmountType = CreditCardAccountScheduledPaymentAmountType = {}));
;
var CreditCardAccountScheduledPaymentType;
(function (CreditCardAccountScheduledPaymentType) {
    CreditCardAccountScheduledPaymentType["ScheduledOnDueDate"] = "ScheduledOnDueDate";
    CreditCardAccountScheduledPaymentType["ScheduledOnStatementDate"] = "ScheduledOnStatementDate";
})(CreditCardAccountScheduledPaymentType || (exports.CreditCardAccountScheduledPaymentType = CreditCardAccountScheduledPaymentType = {}));
;
//# sourceMappingURL=accounts.js.map