import {ListOptions} from "../common/ListOptions";

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

export enum CreditCardAccountScheduledPaymentType {
  ScheduledOnDueDate = 'ScheduledOnDueDate',
  ScheduledOnStatementDate = 'ScheduledOnStatementDate'
};

export type CreditCardAccount = {
    id: string;
    userId: string;
    status: CreditCardAccountStatus;
    creditLimitCents: number;
    interestRate: number;
    balanceCents: number;
    name: string;
    scheduledPaymentAmountType: CreditCardAccountScheduledPaymentAmountType | null;
    scheduledPaymentType: CreditCardAccountScheduledPaymentType | null;
    scheduledPaymentDefinition: string | null;
    scheduledPaymentAmountCents: number | null;
    autopayConfiguration: CreditCardAccountAutopayConfiguration | null;
    idempotencyKey: string | null;
    createdAt: string;
    updatedAt: string;
};

export enum CreditCardAccountAutopayConfigurationStatus {
	Active = 'Active',
	Paused = 'Paused',
	Cancelled = 'Cancelled',
	Failed = 'Failed'
};

export enum CreditCardAccountAutopayPayoffAmountType {
	MinimumPayment = 'MinimumPayment',
	FullStatementBalance = 'FullStatementBalance',
	MinimumPaymentPlus = 'MinimumPaymentPlus',
	FullAccountBalance = 'FullAccountBalance',
	CustomPayment = 'CustomPayment'
};

export enum CreditCardAccountAutopayInterval {
	Monthly = 'Monthly',
	Weekly = 'Weekly',
	Daily = 'Daily'
}

export type CreditCardAccountAutopayConfiguration = {
  id: string;
	creditCardAccountId: string;
	status: CreditCardAccountAutopayConfigurationStatus;
	payoffAmountType: CreditCardAccountAutopayPayoffAmountType;
	autopayInterval: CreditCardAccountAutopayInterval;
	autopayCronDefinition: string | null;
	createdAt: Date;
	updatedAt: Date;
}

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
  scheduledPaymentAt?: string;
} & ListOptions;