"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardApplicationStatus = exports.CreditCardApplicationProgress = void 0;
var CreditCardApplicationProgress;
(function (CreditCardApplicationProgress) {
    CreditCardApplicationProgress["NotStarted"] = "NotStarted";
    CreditCardApplicationProgress["IncomeAndExpensesConfirmed"] = "IncomeAndExpensesConfirmed";
    CreditCardApplicationProgress["ApplicationConsentGranted"] = "ApplicationConsentGranted";
    CreditCardApplicationProgress["DisclosuresAccepted"] = "DisclosuresAccepted";
    CreditCardApplicationProgress["ManualReviewNeeded"] = "ManualReviewNeeded";
})(CreditCardApplicationProgress || (exports.CreditCardApplicationProgress = CreditCardApplicationProgress = {}));
var CreditCardApplicationStatus;
(function (CreditCardApplicationStatus) {
    CreditCardApplicationStatus["Pending"] = "Pending";
    CreditCardApplicationStatus["Approved"] = "Approved";
    CreditCardApplicationStatus["Declined"] = "Declined";
})(CreditCardApplicationStatus || (exports.CreditCardApplicationStatus = CreditCardApplicationStatus = {}));
//# sourceMappingURL=applications.js.map