
export type CreditCardApplicationCreditScore = {
    id: string;
    creditCardApplicationId: string;
    creditScoreModel?: string;
    creditScore?: string;
    creditScoreReport?: any;
    bloomConsumerId?: string;
    bloomOrderId?: string;
    hit?: boolean;
    createdAt: string;
};

export type CreateCreditCardApplicationCreditScoreInput = Omit<CreditCardApplicationCreditScore, 'id' | 'createdAt'>;
export type PatchCreditCardApplicationCreditScoreInput = Partial<CreateCreditCardApplicationCreditScoreInput>;