"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardAccountAutopayPaymentStatus = exports.CreditCardPaymentStatus = void 0;
var CreditCardPaymentStatus;
(function (CreditCardPaymentStatus) {
    CreditCardPaymentStatus["Pending"] = "Pending";
    CreditCardPaymentStatus["Paid"] = "Paid";
    CreditCardPaymentStatus["Overdue"] = "Overdue";
})(CreditCardPaymentStatus || (exports.CreditCardPaymentStatus = CreditCardPaymentStatus = {}));
;
var CreditCardAccountAutopayPaymentStatus;
(function (CreditCardAccountAutopayPaymentStatus) {
    CreditCardAccountAutopayPaymentStatus["Paid"] = "Paid";
    CreditCardAccountAutopayPaymentStatus["Failed"] = "Failed";
    CreditCardAccountAutopayPaymentStatus["Cancelled"] = "Cancelled";
})(CreditCardAccountAutopayPaymentStatus || (exports.CreditCardAccountAutopayPaymentStatus = CreditCardAccountAutopayPaymentStatus = {}));
//# sourceMappingURL=payments.js.map