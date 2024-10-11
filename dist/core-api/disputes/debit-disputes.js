"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisputeOrderBy = exports.DebitCardTransactionDisputeStatus = exports.DebitCardDisputeStatus = void 0;
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
    DebitCardTransactionDisputeStatus["Canceled"] = "Canceled";
})(DebitCardTransactionDisputeStatus || (exports.DebitCardTransactionDisputeStatus = DebitCardTransactionDisputeStatus = {}));
var DisputeOrderBy;
(function (DisputeOrderBy) {
    DisputeOrderBy["NewestFirst"] = "NewestFirst";
    DisputeOrderBy["OldestFirst"] = "OldestFirst";
})(DisputeOrderBy || (exports.DisputeOrderBy = DisputeOrderBy = {}));
//# sourceMappingURL=debit-disputes.js.map