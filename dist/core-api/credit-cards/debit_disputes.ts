import { ListOptions } from "../common/ListOptions";
import { Page } from "../common/Page";
import { DisputeAnswer } from "../disputes/DisputeAnswer";
import { DisputeReason } from "../disputes/DisputeReason";

export enum DebitCardDisputeStatus {
    Created = 'Created',
    Investigating = 'Investigating',
    Closed = 'Closed'
};

export enum DebitCardTransactionDisputeStatus {
    Created = 'Created',
    Pending = 'Pending',
    ResolvedLost = 'ResolvedLost',
    ResolvedWon = 'ResolvedWon',
    Denied = 'Denied'
}

export type DebitCardDispute = {
    id: string;
    debitCardAccountId: string;
    disputeReasonId: string;
    status: DebitCardDisputeStatus;
    disputeRefNum: number;
    casapDisputeId: string | null;
    closedAt: string | null
    disputedAt: string;
    createdAt: string;
    updatedAt: string;
    disputeReason: DisputeReason;
    questionnaireAnswers: DisputeAnswer[];
    transactions: DebitCardDisputeTransaction[];
}

export type DebitCardDisputeTransaction = {
    id: string;
    debitCardDisputeId: string;
    transactionId: string;
    disputeAmountCents: number;
    status: DebitCardTransactionDisputeStatus;
    reissuedTransactionId: string | null;
    provisionalDebitTransactionId: string | null;
    provisionalDebitIssuedAt: string | null;
    provisionalDebitReversalTransactionId: string | null;
    provisionalDebitReversalIssuedAt: string | null;
    resolvedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

export type CreateDebitCardDisputeInput = {
    debitCardAccountId: string;
    disputeReasonId: string;
    transactions: CreateDebitCardDisputeTransactionInput[];
    questionnaireAnswers: CreateDisputeAnswerInput[];
    casapDisputeId?: string;
    disputedAt?: string;
};

export type UpdateDebitCardDisputeInput = {
    disputeId: string;
    status: DebitCardDisputeStatus;
};

export type PatchDebitCardDisputeInput = Partial<Omit<DebitCardDispute, 'id' | 'debitCardAccountId' | 'disputeReason' | 'questionairreAnswers' | 'createdAt' | 'updatedAt' | 'transactions'>>;

export type FindDebitCardDisputeInput = Partial<Omit<DebitCardDispute, 'disputeReason' | 'questionairreAnswers' | 'createdAt' | 'updatedAt' | 'transactions'>>
    & {userId?: string, statusIn?: DebitCardDisputeStatus[]} & ListOptions;

export type DebitCardDisputePage = Page<DebitCardDispute>;

export type CreateDebitCardDisputeTransactionInput = {
    transactionId: string;
    disputeAmountCents: number;
};

export type CreateDisputeAnswerInput = {
    question: string;
    questionEs: string;
    answer: string;
    answerEs: string;
}

export type PatchDebitCardDisputeTransactionInput = Partial<Omit<DebitCardDisputeTransaction, 'id' | 'createdAt' | 'updatedAt'>>;