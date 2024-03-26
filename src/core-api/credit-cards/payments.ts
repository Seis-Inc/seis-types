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
export type PatchCreditCardAccountAutopayPaymentInput = Partial<Omit<CreditCardAccountAutopayPayment, 'id' | 'creditCardAccountId' | 'createdAt' | 'updatedAt'>>;
export type FindCreditCardAccountAutopayPaymentInput = Partial<Omit<CreditCardAccountAutopayPayment, 'createdAt' | 'updatedAt'>> & ListOptions;

export type CreditCardAccountPayment = {
    id: string;
    creditCardAccountId: string;
    status: CreditCardPaymentStatus;
    amountCents: number;
    bookPaymentId: string | null;
    paidAt: string | null;
    createdAt: string;
    updatedAt: string;
};

export type CreateCreditCardAccountPaymentInput = Omit<CreditCardAccountPayment, 'id' | 'createdAt' | 'updatedAt'>;
export type PatchCreditCardAccountPaymentInput = Partial<Omit<CreditCardAccountPayment, 'id' | 'creditCardAccountId' | 'createdAt' | 'updatedAt'>>;
export type FindCreditCardAccountPaymentInput = Partial<Omit<CreditCardAccountPayment, 'createdAt' | 'updatedAt'>> & ListOptions;
export type GetCreditCardAccountPaymentInput = {
    creditCardAccountId: string;
};

export type FindCreditCardPaymentInput = {
    creditCardAccountId?: string;
} & ListOptions;