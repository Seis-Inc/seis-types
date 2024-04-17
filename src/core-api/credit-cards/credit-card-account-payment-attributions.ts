
export type CreditCardAccountPaymentAttribution = {
    id: string;
    creditCardAccountId: string;
    repaymentTransactionId: string;
    creditCardTransactionId: string;
    repaymentAmountCents: number;
    createdAt: string;
    updatedAt: string;
};

export type CreateCreditCardAccountPaymentAttributionInput = Omit<CreditCardAccountPaymentAttribution, 'id' | 'createdAt' | 'updatedAt'>;
export type FindCreditCardAccountPaymentAttributionsFilter = Partial<Omit<CreditCardAccountPaymentAttribution, 'id' | 'createdAt' | 'updatedAt' | 'repaymentAmountCents'>>;