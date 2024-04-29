"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardCustomerApplicationStep = exports.CreditCardApplicationStatus = exports.CreditCardApplicationProgress = void 0;
var CreditCardApplicationProgress;
(function (CreditCardApplicationProgress) {
    CreditCardApplicationProgress["NotStarted"] = "NotStarted";
    CreditCardApplicationProgress["IncomeAndExpensesConfirmed"] = "IncomeAndExpensesConfirmed";
    CreditCardApplicationProgress["ApplicationConsentGranted"] = "ApplicationConsentGranted";
    CreditCardApplicationProgress["DisclosuresAccepted"] = "DisclosuresAccepted";
})(CreditCardApplicationProgress || (exports.CreditCardApplicationProgress = CreditCardApplicationProgress = {}));
var CreditCardApplicationStatus;
(function (CreditCardApplicationStatus) {
    CreditCardApplicationStatus["Pending"] = "Pending";
    CreditCardApplicationStatus["Approved"] = "Approved";
    CreditCardApplicationStatus["Declined"] = "Declined";
})(CreditCardApplicationStatus || (exports.CreditCardApplicationStatus = CreditCardApplicationStatus = {}));
var CreditCardCustomerApplicationStep;
(function (CreditCardCustomerApplicationStep) {
    CreditCardCustomerApplicationStep["InputIncomeAndExpenses"] = "InputIncomeAndExpenses";
    CreditCardCustomerApplicationStep["AcceptConsent"] = "AcceptConsent";
    CreditCardCustomerApplicationStep["AwaitReview"] = "AwaitReview";
    CreditCardCustomerApplicationStep["AcceptDisclosures"] = "AcceptDisclosures";
    CreditCardCustomerApplicationStep["Approved"] = "Approved";
    CreditCardCustomerApplicationStep["Denied"] = "Denied";
})(CreditCardCustomerApplicationStep || (exports.CreditCardCustomerApplicationStep = CreditCardCustomerApplicationStep = {}));
//# sourceMappingURL=applications.js.map