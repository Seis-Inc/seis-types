import { ListOptions } from '../common/ListOptions'
import { Optional } from '../common/Optional'
import { Page } from '../common/Page'

export interface CreditCardApplicationFilter extends ListOptions {
  id?: string
  userId?: string
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

  approved: boolean
  lineAssignmentCents: number

  disclosuresDocumentId: Optional<string>
  aanDocumentId: Optional<string>
}
