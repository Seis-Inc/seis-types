import { ListOptions } from "../common/ListOptions";
import { Page } from "../common/Page";

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
    updatedAt: string;
};

export type CreditScore = {
    creditScore: string;
    pulledAt: string;
};

export type CreateCreditCardApplicationCreditScoreInput = Omit<CreditCardApplicationCreditScore, 'id' | 'createdAt' | 'updatedAt'>;
export type PatchCreditCardApplicationCreditScoreInput = Partial<CreateCreditCardApplicationCreditScoreInput>;
export type FilterCreditCardApplicationCreditScoreInput = {
    creditCardApplicationId?: string;
    creditScoreModel?: string;
} & ListOptions;
export type CreditCardApplicationCreditScorePage = Page<CreditCardApplicationCreditScore>;

export type FilterCreditScoreInput = {
    creditCardApplicationId?: string;
    userId?: string;
    creditScoreModel?: string;
} & ListOptions;

export type CreditScorePage = Page<CreditScore>;

