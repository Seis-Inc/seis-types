import { ListOptions } from "../common/ListOptions";
import { Optional } from "../common/Optional";

export interface CreditCardApplicationFilter extends ListOptions {
  id?: string;
  userId?: string;
}

export interface CreditCardApplication {
  id: string;
  userId: string;
  idempotencyKey: string;

  monthlyIncomeCents: Optional<number>;
  monthlyExpensesCents: Optional<number>;
  incomeAndExpensesConfirmedAt: Optional<string>;

  consentGrantedAt: Optional<string>;
  consentAgreementUrl: Optional<string>;

  approved: boolean;
  lineAssignmentCents: number;

  disclosuresAcceptedAt: Optional<string>;
  disclosuresUrl: Optional<string>;
}
