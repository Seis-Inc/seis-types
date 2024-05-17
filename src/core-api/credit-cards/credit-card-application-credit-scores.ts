
export type CreditCardApplicationCreditScore = {
    id: string;
    creditCardApplicationId: string;
    creditScoreModel?: string;
    creditScore?: string;
    bloomConsumerId?: string;
    bloomOrderId?: string;
    stracCreditReportId?: string;
    hit?: boolean;
    createdAt: string;
};

export type CreateCreditCardApplicationCreditScoreInput = Omit<CreditCardApplicationCreditScore, 'id' | 'createdAt'>;
export type PatchCreditCardApplicationCreditScoreInput = Partial<CreateCreditCardApplicationCreditScoreInput>;