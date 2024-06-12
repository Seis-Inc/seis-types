"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardAccountAutopayInterval = exports.CreditCardAccountAutopayPayoffAmountType = exports.CreditCardAccountAutopayConfigurationStatus = exports.CreditCardAccountScheduledPaymentType = exports.CreditCardAccountScheduledPaymentAmountType = exports.CreditCardAccountStatus = void 0;
var CreditCardAccountStatus;
(function (CreditCardAccountStatus) {
    CreditCardAccountStatus["Open"] = "Open";
    CreditCardAccountStatus["Closed"] = "Closed";
    CreditCardAccountStatus["Frozen"] = "Frozen";
    CreditCardAccountStatus["PaidOff"] = "PaidOff";
    CreditCardAccountStatus["WriteOff"] = "WriteOff";
    CreditCardAccountStatus["ClosedByCustomer"] = "ClosedByCustomer";
    CreditCardAccountStatus["ClosedBySeis"] = "ClosedBySeis";
})(CreditCardAccountStatus || (exports.CreditCardAccountStatus = CreditCardAccountStatus = {}));
var CreditCardAccountScheduledPaymentAmountType;
(function (CreditCardAccountScheduledPaymentAmountType) {
    CreditCardAccountScheduledPaymentAmountType["MinimumPayment"] = "MinimumPayment";
    CreditCardAccountScheduledPaymentAmountType["FullStatementBalance"] = "FullStatementBalance";
    CreditCardAccountScheduledPaymentAmountType["MinimumPaymentPlus"] = "MinimumPaymentPlus";
    CreditCardAccountScheduledPaymentAmountType["FullAccountBalance"] = "FullAccountBalance";
    CreditCardAccountScheduledPaymentAmountType["CustomPayment"] = "CustomPayment";
})(CreditCardAccountScheduledPaymentAmountType || (exports.CreditCardAccountScheduledPaymentAmountType = CreditCardAccountScheduledPaymentAmountType = {}));
var CreditCardAccountScheduledPaymentType;
(function (CreditCardAccountScheduledPaymentType) {
    CreditCardAccountScheduledPaymentType["ScheduledOnDueDate"] = "ScheduledOnDueDate";
    CreditCardAccountScheduledPaymentType["ScheduledOnStatementDate"] = "ScheduledOnStatementDate";
})(CreditCardAccountScheduledPaymentType || (exports.CreditCardAccountScheduledPaymentType = CreditCardAccountScheduledPaymentType = {}));
var CreditCardAccountAutopayConfigurationStatus;
(function (CreditCardAccountAutopayConfigurationStatus) {
    CreditCardAccountAutopayConfigurationStatus["Active"] = "Active";
    CreditCardAccountAutopayConfigurationStatus["Paused"] = "Paused";
    CreditCardAccountAutopayConfigurationStatus["Cancelled"] = "Cancelled";
    CreditCardAccountAutopayConfigurationStatus["Failed"] = "Failed";
})(CreditCardAccountAutopayConfigurationStatus || (exports.CreditCardAccountAutopayConfigurationStatus = CreditCardAccountAutopayConfigurationStatus = {}));
;
var CreditCardAccountAutopayPayoffAmountType;
(function (CreditCardAccountAutopayPayoffAmountType) {
    CreditCardAccountAutopayPayoffAmountType["MinimumPayment"] = "MinimumPayment";
    CreditCardAccountAutopayPayoffAmountType["FullStatementBalance"] = "FullStatementBalance";
    CreditCardAccountAutopayPayoffAmountType["MinimumPaymentPlus"] = "MinimumPaymentPlus";
    CreditCardAccountAutopayPayoffAmountType["FullAccountBalance"] = "FullAccountBalance";
    CreditCardAccountAutopayPayoffAmountType["CustomPayment"] = "CustomPayment";
})(CreditCardAccountAutopayPayoffAmountType || (exports.CreditCardAccountAutopayPayoffAmountType = CreditCardAccountAutopayPayoffAmountType = {}));
;
var CreditCardAccountAutopayInterval;
(function (CreditCardAccountAutopayInterval) {
    CreditCardAccountAutopayInterval["Monthly"] = "Monthly";
    CreditCardAccountAutopayInterval["Weekly"] = "Weekly";
    CreditCardAccountAutopayInterval["Daily"] = "Daily";
})(CreditCardAccountAutopayInterval || (exports.CreditCardAccountAutopayInterval = CreditCardAccountAutopayInterval = {}));
//# sourceMappingURL=accounts.js.map