"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebitCardTransactionDisputeStatus = exports.DebitCardDisputeStatus = void 0;
var DebitCardDisputeStatus;
(function (DebitCardDisputeStatus) {
    DebitCardDisputeStatus["Created"] = "Created";
    DebitCardDisputeStatus["Investigating"] = "Investigating";
    DebitCardDisputeStatus["Closed"] = "Closed";
})(DebitCardDisputeStatus || (exports.DebitCardDisputeStatus = DebitCardDisputeStatus = {}));
;
var DebitCardTransactionDisputeStatus;
(function (DebitCardTransactionDisputeStatus) {
    DebitCardTransactionDisputeStatus["Created"] = "Created";
    DebitCardTransactionDisputeStatus["Pending"] = "Pending";
    DebitCardTransactionDisputeStatus["ResolvedLost"] = "ResolvedLost";
    DebitCardTransactionDisputeStatus["ResolvedWon"] = "ResolvedWon";
    DebitCardTransactionDisputeStatus["Denied"] = "Denied";
})(DebitCardTransactionDisputeStatus || (exports.DebitCardTransactionDisputeStatus = DebitCardTransactionDisputeStatus = {}));
//# sourceMappingURL=debit_disputes.js.map