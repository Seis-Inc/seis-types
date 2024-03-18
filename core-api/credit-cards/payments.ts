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
    dueDate: Date;
    periodDate: Date;
    createdAt: Date;
    updatedAt: Date;
};

export type CreateCreditCardPaymentInput = {
    creditCardAccountId: string;
    minimumPaymentAmountCents: number;
    periodBalanceCents: number;
    status: CreditCardPaymentStatus;
    dueDate: Date;
    periodDate: Date;
};

export type GetCreditCardPaymentInput = {
    creditCardAccountId: string;
};

export type FindCreditCardPaymentInput = {
    creditCardAccountId?: string;
} & ListOptions;