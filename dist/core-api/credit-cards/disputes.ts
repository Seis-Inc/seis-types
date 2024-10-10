import { ListOptions } from "../common/ListOptions";
import { Page } from "../common/Page";
import { DisputeAnswer } from "../disputes/DisputeAnswer";
import { DisputeReason } from "../disputes/DisputeReason";

export enum CreditCardDisputeStatus {
    Created = 'Created',
    Investigating = 'Investigating',
    Closed = 'Closed'
};

export enum CreditCardTransactionDisputeStatus {
    Created = 'Created',
    Pending = 'Pending',
    ResolvedLost = 'ResolvedLost',
    ResolvedWon = 'ResolvedWon',
    Denied = 'Denied',
    Canceled = 'Canceled'
}

export type CreditCardDispute = {
    id: string;
    creditCardAccountId: string;
    disputeReasonId: string;
    status: CreditCardDisputeStatus;
    disputeRefNum: number;
    casapDisputeId: string | null;
    closedAt: string | null
    disputedAt: string;
    createdAt: string;
    updatedAt: string;
    disputeReason: DisputeReason;
    questionnaireAnswers: DisputeAnswer[];
    transactions: CreditCardDisputeTransaction[];
}

export type CreditCardDisputeTransaction = {
    id: string;
    creditCardDisputeId: string;
    transactionId: string;
    disputeAmountCents: number;
    status: CreditCardTransactionDisputeStatus;
    reissuedTransactionId: string | null;
    provisionalCreditTransactionId: string | null;
    provisionalCreditIssuedAt: string | null;
    provisionalCreditReversalTransactionId: string | null;
    provisionalCreditReversalIssuedAt: string | null;
    resolvedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

export type CreateCreditCardDisputeInput = {
    creditCardAccountId: string;
    disputeReasonId: string;
    transactions: CreateCreditCardDisputeTransactionInput[];
    questionnaireAnswers: CreateDisputeAnswerInput[];
    casapDisputeId?: string;
    disputedAt?: string;
};

export type UpdateCreditCardDisputeInput = {
    disputeId: string;
    status: CreditCardDisputeStatus;
};

export type PatchCreditCardDisputeInput = Partial<Omit<CreditCardDispute, 'id' | 'creditCardAccountId' | 'disputeReason' | 'questionairreAnswers' | 'createdAt' | 'updatedAt' | 'transactions'>>;

export type FindCreditCardDisputeInput = Partial<Omit<CreditCardDispute, 'disputeReason' | 'questionairreAnswers' | 'createdAt' | 'updatedAt' | 'transactions'>>
    & {userId?: string, statusIn?: CreditCardDisputeStatus[]} & ListOptions;

export type CreditCardDisputePage = Page<CreditCardDispute>;

export type CreateCreditCardDisputeTransactionInput = {
    transactionId: string;
    disputeAmountCents: number;
};

export type CreateDisputeAnswerInput = {
    question: string;
    questionEs: string;
    answer: string;
    answerEs: string;
}

export type PatchCreditCardDisputeTransactionInput = Partial<Omit<CreditCardDisputeTransaction, 'id' | 'createdAt' | 'updatedAt'>>;