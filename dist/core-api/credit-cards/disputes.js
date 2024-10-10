"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardTransactionDisputeStatus = exports.CreditCardDisputeStatus = void 0;
var CreditCardDisputeStatus;
(function (CreditCardDisputeStatus) {
    CreditCardDisputeStatus["Created"] = "Created";
    CreditCardDisputeStatus["Investigating"] = "Investigating";
    CreditCardDisputeStatus["Closed"] = "Closed";
})(CreditCardDisputeStatus || (exports.CreditCardDisputeStatus = CreditCardDisputeStatus = {}));
;
var CreditCardTransactionDisputeStatus;
(function (CreditCardTransactionDisputeStatus) {
    CreditCardTransactionDisputeStatus["Created"] = "Created";
    CreditCardTransactionDisputeStatus["Pending"] = "Pending";
    CreditCardTransactionDisputeStatus["ResolvedLost"] = "ResolvedLost";
    CreditCardTransactionDisputeStatus["ResolvedWon"] = "ResolvedWon";
    CreditCardTransactionDisputeStatus["Denied"] = "Denied";
    CreditCardTransactionDisputeStatus["Canceled"] = "Canceled";
})(CreditCardTransactionDisputeStatus || (exports.CreditCardTransactionDisputeStatus = CreditCardTransactionDisputeStatus = {}));
//# sourceMappingURL=disputes.js.map