import { ListOptions } from "../common/ListOptions";
import { Page } from "../common/Page";

export type CreditLimitUnderwritingDecision = {
    id: string;
    userId: string;
    inputData: Record<string, any>;
    decisionId: string;
    decisionMadeAt: string | null;
    decisionUrl: string;
    creditLimitCents: number | null;
    lineType: string | null;
    createdAt: string;
    updatedAt: string;
}

export type CreateCreditLimitUnderwritingDecisionInput = Omit<CreditLimitUnderwritingDecision, 'id' | 'createdAt' | 'updatedAt'>;

export type PatchCreditLimitUnderwritingDecisionInput = Partial<Omit<CreditLimitUnderwritingDecision, 'id' | 'createdAt' | 'updatedAt'>>;

export type FilterCreditLimitUnderwritingDecisionInput = {
    userId?: string;
    decisionId?: string;
} & ListOptions

export type CreditLimitUnderwritingDecisionPage = Page<CreditLimitUnderwritingDecision>;