import {ListOptions} from "../common/ListOptions";
import { CreditCardAccountStatementPeriod } from "./periods";

export enum CreditCardPaymentStatus{
    Failed = 'Failed',
    Pending = 'Pending',
    Paid = 'Paid',
    Overdue = 'Overdue'
};

export enum CreditCardAccountAutopayPaymentStatus {
    Pending = 'Pending',
    Paid = 'Paid',
    Failed = 'Failed',
    Cancelled = 'Cancelled'
}

export type CreditCardAccountAutopayPayment = {
    id: string;
    creditCardAccountId: string;
    status: CreditCardAccountAutopayPaymentStatus;
    createdAt: string;
    updatedAt: string;
};

export type CreateCreditCardAccountAutopayPaymentInput = Omit<CreditCardAccountAutopayPayment, 'id' | 'createdAt' | 'updatedAt'>;
export type PatchCreditCardAccountAutopayPaymentInput = Partial<Omit<CreditCardAccountAutopayPayment, 'id' | 'creditCardAccountId' | 'createdAt' | 'updatedAt'>>;
export type FindCreditCardAccountAutopayPaymentInput = Partial<Omit<CreditCardAccountAutopayPayment, 'createdAt' | 'updatedAt'>> & ListOptions;

export type CreditCardAccountPayment = {
    id: string;
    creditCardAccountId: string;
    creditCardAccountStatementId: string | null;
    status: CreditCardPaymentStatus;
    amountCents: number;
    bookPaymentId: string | null; // @deprecated
    ddaAccountId: string | null; // @deprecated
    paidAt: string | null;
    createdAt: string;
    updatedAt: string;
    autopay?: CreditCardAccountAutopayPayment; // @deprecated
    statement?: CreditCardAccountStatementPeriod | null;
    isPaymentAppliedToOverdueBalance: boolean;
    isCreditBuildingQualified: boolean;
    creditRewardId: string | null;
    source: string | null;
    sourceId: string | null;
};

export type CreateCreditCardAccountPaymentInput = Omit<CreditCardAccountPayment, 'id' | 'createdAt' | 'updatedAt' | 'isCreditBuildingQualified' | 'creditRewardId'>;
export type PatchCreditCardAccountPaymentInput = Partial<Omit<CreditCardAccountPayment, 'id' | 'creditCardAccountId' | 'createdAt' | 'updatedAt' | 'ddaAccountId'>>;
export type FindCreditCardAccountPaymentInput = FindCreditCardPaymentInput;
export type GetCreditCardAccountPaymentInput = {    creditCardAccountId: string;
};

export type FindCreditCardPaymentInput = {
    id?: string;
    unitPaymentId?: string;
    creditCardAccountId?: string;
    statusIn?: CreditCardPaymentStatus[];
    creditCardAccountStatementId?: string;
} & ListOptions;