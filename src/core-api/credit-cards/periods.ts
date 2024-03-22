import { ListOptions } from '../common/ListOptions';

export enum CreditCardAccountPeriodStatus {
    NotDue = 'NotDue',
    Due = 'Due',
    Failed = 'Failed',
    Paid = 'Paid',
    PastDue = 'PastDue',
}

export type CreditCardAccountScheduledPeriod = {
    id: string;
    creditCardAccountId: string;
    startAt: string;
    endAt: string;
    status: CreditCardAccountPeriodStatus;
    paidAt: string | null;
    createdAt: Date;
    updatedAt: Date;
};

export type CreditCardAccountStatementPeriod = {
    id: string;
    creditCardAccountId: string;
    startAt: string;
    endAt: string;
    dueAt: string;
    status: CreditCardAccountPeriodStatus;
    statementBalanceCents: number;
    interestDueCents: number;
    miniumPaymentCents: number;
    paidAt: string | null;
    createdAt: Date;
    updatedAt: Date;
};

export type CreateCreditCardAccountScheduledPeriodInput = Omit<CreditCardAccountScheduledPeriod, 'id' | 'createdAt' | 'updatedAt'>;
export type CreateCreditCardAccountStatementPeriodInput = Omit<CreditCardAccountStatementPeriod, 'id' | 'createdAt' | 'updatedAt'>;

export type PatchCreditCardAccountScheduledPeriodInput = Partial<CreateCreditCardAccountScheduledPeriodInput>;
export type PatchCreditCardAccountStatementPeriodInput = Partial<CreateCreditCardAccountStatementPeriodInput>;

export type FilterCreditCardAccountScheduledPeriodsInput = {
    id?: string;
    userId?: string;
    creditCardAccountId?: string;
} & ListOptions;

export type FilterCreditCardAccountStatementPeriodsInput = {
    id?: string;
    userId?: string;
    creditCardAccountId?: string;
} & ListOptions;