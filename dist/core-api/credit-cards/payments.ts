import {ListOptions} from "../common/ListOptions";

export enum CreditCardPaymentStatus{
    Pending = 'Pending',
    Paid = 'Paid',
    Overdue = 'Overdue'
};

export enum CreditCardAccountAutopayPaymentStatus {
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
export type FindCreditCardAccountAutopayPaymentInput = Partial<Omit<CreditCardAccountAutopayPayment, 'createdAt' | 'updatedAt'>> & ListOptions;

export type CreditCardPayment = {
    id: string;
    creditCardAccountId: string;
    minimumPaymentAmountCents: number;
    periodBalanceCents: number;
    status: CreditCardPaymentStatus;
    dueAt: string;
    periodEndsAt: string;
    createdAt: string;
    updatedAt: string;
};

export type CreateCreditCardPaymentInput = {
    creditCardAccountId: string;
    minimumPaymentAmountCents: number;
    periodBalanceCents: number;
    status: CreditCardPaymentStatus;
    dueAt: string;
    periodEndsAt: string;
};

export type GetCreditCardPaymentInput = {
    creditCardAccountId: string;
};

export type FindCreditCardPaymentInput = {
    creditCardAccountId?: string;
} & ListOptions;