
export type CreditCardApplicationCreditScore = {
    id: string;
    creditCardApplicationId: string;
    creditScoreModel?: string;
    creditScore?: number;
    creditScoreReport?: any;
    createdAt: string;
};

export type CreateCreditCardApplicationCreditScoreInput = Omit<CreditCardApplicationCreditScore, 'id' | 'createdAt'>;