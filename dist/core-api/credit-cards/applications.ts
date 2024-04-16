import { ListOptions } from '../common/ListOptions'
import { Optional } from '../common/Optional'
import { Page } from '../common/Page'

export interface CreditCardApplicationFilter extends ListOptions {
  id?: string
  userId?: string
}

export enum CreditCardApplicationProgress {
	NotStarted = 'NotStarted',
	IncomeAndExpensesConfirmed = 'IncomeAndExpensesConfirmed',
	ApplicationConsentGranted = 'ApplicationConsentGranted',
	DisclosuresAccepted = 'DisclosuresAccepted'
}

export enum CreditCardApplicationStatus {
	Pending = 'Pending',
	Approved = 'Approved',
	Declined = 'Declined'
}

export interface CreditCardApplication {
  id: string
  userId: string
  idempotencyKey: string

  monthlyIncomeCents: Optional<number>
  monthlyExpensesCents: Optional<number>
  incomeAndExpensesConfirmedAt: Optional<string>

  consentGrantedAt: Optional<string>
  consentAgreementUrl: Optional<string>

  lineAssignmentCents: number

  progress: CreditCardApplicationProgress
  status: CreditCardApplicationStatus

  taktileInputData: Optional<Record<string, any>>
  taktileDecisionDate: Optional<string>
  
  disclosuresDocumentId: Optional<string>
  aanDocumentId: Optional<string>

  taktileDecisionUrl: Optional<string>
}
