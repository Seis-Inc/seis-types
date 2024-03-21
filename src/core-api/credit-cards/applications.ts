import { Optional } from "../common/Optional";

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
  status: CreditCardApplicationStatus

  monthlyIncomeCents: Optional<number>;
  monthlyExpensesCents: Optional<number>;
  incomeAndExpensesConfirmedAt: Optional<string>;

  consentGrantedAt: Optional<string>;
  consentAgreementURL: Optional<string>;

  approved: boolean;
  lineAssignmentCents: Optional<number>;

  disclosuresAcceptedAt: Optional<string>;
  acceptedDisclosuresURL: Optional<string>;
}

export interface CreditCardApplicationIncomeAndExpenseInput {
  monthlyIncomeCents: number;
  monthlyExpensesCents: number;
}
