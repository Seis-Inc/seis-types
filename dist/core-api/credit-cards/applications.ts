import { ListOptions } from '../common/ListOptions'
import { Optional } from '../common/Optional'
import { Page } from '../common/Page'
import { CreditCardApplicationCreditScore } from './credit-card-application-credit-scores'

export interface CreditCardApplicationFilter extends ListOptions {
  id?: string
  userId?: string
  decisionId?: string;
  creditLimitUnderwritingDecisionId?: string;
  bloomConsumerId?: string;
}

export enum CreditCardApplicationProgress {
	NotStarted = 'NotStarted',
	IncomeAndExpensesConfirmed = 'IncomeAndExpensesConfirmed',
	ApplicationConsentGranted = 'ApplicationConsentGranted',
	DisclosuresAccepted = 'DisclosuresAccepted',
  ManualReviewNeeded = 'ManualReviewNeeded'
}

export enum CreditCardApplicationStatus {
	Pending = 'Pending',
	Approved = 'Approved',
	Declined = 'Declined'
}

export type CreditCardApplicationDecision = {
  creditCardApplicationId: string
  decisionId: string
  inputData: Record<string, any>
  decisionDate: string;
  decisionUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface CoreCreditCardApplication {
  id: string
  userId: string
  idempotencyKey: string

  statedMonthlyIncomeCents: Optional<number>
  statedMonthlyExpensesCents: Optional<number>
  incomeAndExpensesConfirmedAt: Optional<string>

  consentGrantedAt: Optional<string>
  consentAgreementUrl: Optional<string>

  lineAssignmentCents: number

  quotedInterestRate: Optional<number>

  progress: CreditCardApplicationProgress
  status: CreditCardApplicationStatus

  disclosuresDocumentId: Optional<string>
  aanDocumentId: Optional<string>
  creditLimitUnderwritingDecisionId: Optional<string>

  bloomConsumerId: Optional<string>

  decision: Optional<CreditCardApplicationDecision>

  creditScores: Optional<CreditCardApplicationCreditScore[]>

  secureFundsBeforeOrder: boolean
}
