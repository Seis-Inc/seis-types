import { ListOptions } from "../common/common";

export enum CreditCardPaymentStatus{
    Pending = 'Pending',
    Paid = 'Paid',
    Overdue = 'Overdue'
};

export type CreditCardPayment = {
    id: string;
    creditCardAccountId: string;
    minimumPaymentAmountCents: number;
    periodBalanceCents: number;
    status: CreditCardPaymentStatus;
    dueDate: string;
    periodDate: string;
    createdAt: string;
    updatedAt: string;
};

export type CreateCreditCardPaymentInput = {
    creditCardAccountId: string;
    minimumPaymentAmountCents: number;
    periodBalanceCents: number;
    status: CreditCardPaymentStatus;
    dueDate: string;
    periodDate: string;
};

export type GetCreditCardPaymentInput = {
    creditCardAccountId: string;
};

export type FindCreditCardPaymentInput = {
    creditCardAccountId?: string;
} & ListOptions;