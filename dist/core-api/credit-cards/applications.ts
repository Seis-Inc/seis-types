export enum CreditCardApplicationStatus {
  ConfirmNameAndAddress,
  ConfirmIncomAndExpenses,
  ConfirmApplicationConsent,
  AcceptDisclosures,
  ApplicationApproved,
  ApplicationDenied,
}

export interface CreditCardApplication {
  id: string;
  incomeAndExpensesConfirmedAt: string | null;
  creditConsentGrantedAt: string | null;
}

export interface CreditCardApplicationIncomeAndExpenseInput {
  monthlyIncomeCents: number;
  monthlyExpensesCents: number;
}
