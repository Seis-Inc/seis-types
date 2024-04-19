import {ListOptions} from "../common/ListOptions";

export enum CreditCardAccountStatus {
    Open = 'Open',
    Closed = 'Closed',
    Frozen = 'Frozen'
}

export enum CreditCardAccountScheduledPaymentAmountType {
	MinimumPayment = 'MinimumPayment',
	FullStatementBalance = 'FullStatementBalance',
	MinimumPaymentPlus = 'MinimumPaymentPlus',
	FullAccountBalance = 'FullAccountBalance',
	CustomPayment = 'CustomPayment'
}

export enum CreditCardAccountScheduledPaymentType {
  ScheduledOnDueDate = 'ScheduledOnDueDate',
  ScheduledOnStatementDate = 'ScheduledOnStatementDate'
}

export type CreditCardAccount = {
    id: string;
    userId: string;
    status: CreditCardAccountStatus;
    creditLimitCents: number;
    interestRate: number;
    balanceCents: number;
    name: string;
    autopayConfiguration: CreditCardAccountAutopayConfiguration | null;
	  lithicAccountToken: string | null;
	  debtAccountId: string;
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

export type CreateCreditCardAccountAutopayConfigurationInput = Omit<CreditCardAccountAutopayConfiguration, 'id' | 'creditCardAccountId' |  'createdAt' | 'updatedAt'>;
export type PatchCreditCardAccountAutopayConfigurationInput = Partial<Omit<CreditCardAccountAutopayConfiguration, 'id' | 'creditCardAccountId' |'createdAt' | 'updatedAt'>>;

export type CreateCreditCardAccountInput = Omit<CreditCardAccount, 'id' | 'createdAt' | 'updatedAt' | 'idempotencyKey' | 'autopayConfiguration'>;

export type PatchCreditCardAccountInput = Partial<Omit<CreditCardAccount, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'idempotencyKey' | 'autopayConfiguration'>>;

export type FindCreditCardAccountInput = {
  id?: string;
  userId?: string;
  autopayAt?: string;
  balanceCentsGreaterThan?: number;
	lithicAccountToken?: string;
} & ListOptions;

export type FilterCreditCardAccountAutopayConfiguration = {
  id?: string;
  creditCardAccountId?: string;
} & ListOptions;
