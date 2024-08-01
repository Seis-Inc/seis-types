import { ListOptions } from "../common/ListOptions";
import { Page } from "../common/Page";
import { DisputeAnswer } from "../disputes/DisputeAnswer";
import { DisputeReason } from "../disputes/DisputeReason";

export enum CreditCardDisputeStatus {
    Pending = 'Pending',
    Created = 'Created',
    Denied = 'Denied',
    ResolvedLost = 'ResolvedLost',
    ResolvedWon = 'ResolvedWon'
};

export type CreditCardDispute = {
    id: string;
    transactionId: string;
    creditCardAccountId: string;
    disputeAmountCents: number;
    disputeReasonId: string;
    status: CreditCardDisputeStatus;
    reissuedTransactionId: string | null;
    provisionalCreditTransactionId: string | null;
    provisionalCreditIssuedAt: string | null;
    provisionalCreditReversalTransactionId: string | null;
    provisionalCreditReversalIssuedAt: string | null;
    resolvedAt: string | null;
    disputeRefNum: number;
    createdAt: string;
    updatedAt: string;
    disputeReason: DisputeReason;
    questionnaireAnswers: DisputeAnswer[];
}

export type CreateCreditCardDisputeInput = Omit<CreditCardDispute, 'id' | 'createdAt' | 'updatedAt' | 'disputeRefNum'>;

export type PatchCreditCardDisputeInput = Partial<Omit<CreditCardDispute, 'id' | 'transactionId' | 'creditCardAccountId' | 'disputeReason' | 'questionairreAnswers' | 'createdAt' | 'updatedAt'>>;

export type FindCreditCardDisputeInput = Partial<Omit<CreditCardDispute, 'disputeReason' | 'questionairreAnswers' | 'createdAt' | 'updatedAt'>>
    & {userId?: string} & ListOptions;

export type CreditCardDisputePage = Page<CreditCardDispute>;