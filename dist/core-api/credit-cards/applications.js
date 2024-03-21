"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardApplicationStatus = void 0;
var CreditCardApplicationStatus;
(function (CreditCardApplicationStatus) {
    CreditCardApplicationStatus[CreditCardApplicationStatus["ConfirmNameAndAddress"] = 0] = "ConfirmNameAndAddress";
    CreditCardApplicationStatus[CreditCardApplicationStatus["ConfirmIncomAndExpenses"] = 1] = "ConfirmIncomAndExpenses";
    CreditCardApplicationStatus[CreditCardApplicationStatus["ConfirmApplicationConsent"] = 2] = "ConfirmApplicationConsent";
    CreditCardApplicationStatus[CreditCardApplicationStatus["AcceptDisclosures"] = 3] = "AcceptDisclosures";
    CreditCardApplicationStatus[CreditCardApplicationStatus["ApplicationApproved"] = 4] = "ApplicationApproved";
    CreditCardApplicationStatus[CreditCardApplicationStatus["ApplicationDenied"] = 5] = "ApplicationDenied";
})(CreditCardApplicationStatus || (exports.CreditCardApplicationStatus = CreditCardApplicationStatus = {}));
//# sourceMappingURL=applications.js.map