import { ListOptions } from "../";

export enum CreditCardAccountStatus {
    Open = 'Open',
    Closed = 'Closed',
    Frozen = 'Frozen'
};

export enum CreditCardAccountScheduledPaymentAmountType {
	MinimumPayment = 'MinimumPayment',
	FullStatementBalance = 'FullStatementBalance',
	MinimumPaymentPlus = 'MinimumPaymentPlus',
	FullAccountBalance = 'FullAccountBalance',
	CustomPayment = 'CustomPayment'
};

export type CreditCardAccount = {
    id: string;
    userId: string;
    status: CreditCardAccountStatus;
    creditLimitCents: number;
    interestRate: number;
    balanceCents: number;
    name: string;
    scheduledPaymentAmountType?: CreditCardAccountScheduledPaymentAmountType;
    scheduledPaymentDefinition?: string;
    scheduledPaymentAmountCents?: number;
    idempotencyKey?: string;
    createdAt: string;
    updatedAt: string;
};

export type CreateCreditCardAccountInput = {
  userId: string;
  creditLimitCents: number;
  interestRate: number;
  name: string;
  balanceCents: number;
};

export type PatchCreditCardAccountInput = Partial<Omit<CreditCardAccount, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'idempotencyKey'>>;

export type FindCreditCardAccountInput = {
  id?: string;
  userId?: string;
} & ListOptions;