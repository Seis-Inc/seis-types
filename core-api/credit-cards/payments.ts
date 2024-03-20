
export type ListOptions = {
    offset?: number;
    limit?: number;
    noRows?: boolean;
    noTotal?: boolean;
    noLimit?: boolean;
}

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