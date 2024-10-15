import { ListOptions } from "../common/ListOptions";
import { Page } from "../common/Page";
import { DisputeAnswer } from "./DisputeAnswer";
import { DisputeReason } from "./DisputeReason";

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
    Denied = 'Denied',
    Canceled = 'Canceled'
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

// This is almost the same as CoreTransaction. This is a hack because we have not included CoreTransaction in seis-types
type TransactionSummary = {
    id: string;
    type: string;
    corrId: string;
    accountId: string;
    createdAt: string;
    direction: string;
    amount: number;
    balance: number;
    summary: string;
    description: string;
    cardLast4Digits?: string;
    merchantName?: string;
    merchantType?: string;
    merchantCategory?: string;
    merchantLocation?: string;
    coordLongitude?: number;
    coordLatitude?: number;
    recurring?: boolean;
    secCode?: string;
    digitalWallet?: string;
    cardPresent?: boolean;
    paymentMethod?: string;
    cardNetwork?: string;
    ecommerce?: boolean;
    dispute?: any;
    cardId?: string;
    source?: string;
    sourceId?: string;
    groupId?: string;
    reversed: boolean;
    isEditable?: boolean;
    didQualifyForCashback?: boolean;
    networkTransactionId?: string;
}

export type DebitCardDisputeTransaction = {
    id: string;
    debitCardDisputeId: string;
    transactionId: string;
    transaction: TransactionSummary;
    disputeAmountCents: number;
    status: DebitCardTransactionDisputeStatus;
    casapDisputeId: string | null;
    unitDisputeId: string | null;
    reissuedTransactionId: string | null;
    provisionalCreditTransactionId: string | null;
    provisionalCreditIssuedAt: string | null;
    provisionalCreditReversalTransactionId: string | null;
    provisionalCreditReversalIssuedAt: string | null;
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

export type PatchDebitCardDisputeInput = Partial<Omit<DebitCardDispute, 'id' | 'debitCardAccountId' | 'disputeReason' | 'questionnaireAnswers' | 'createdAt' | 'updatedAt' | 'transactions'>>;

export enum DisputeOrderBy {
    NewestFirst = 'NewestFirst',
    OldestFirst = 'OldestFirst'
}

export type FindDebitCardDisputeInput = Partial<Omit<DebitCardDispute, 'disputeReason' | 'questionnaireAnswers' | 'createdAt' | 'updatedAt' | 'transactions'>>
    & {userId?: string, statusIn?: DebitCardDisputeStatus[], orderBy?: DisputeOrderBy} & ListOptions;

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