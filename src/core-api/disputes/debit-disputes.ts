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

enum CasapFinalDecisionType {
    AcceptedTypeUnknown = 'ACCEPTED_TYPE_UNKNOWN',
    AcceptedTypeAccountTakeover = 'ACCEPTED_TYPE_ACCOUNT_TAKEOVER',
    AcceptedTypeChargebackWon = 'ACCEPTED_TYPE_CHARGEBACK_WON',
    AcceptedTypeMerchantCredited = 'ACCEPTED_TYPE_MERCHANT_CREDITED',
    AcceptedTypeWriteOff = 'ACCEPTED_TYPE_WRITE_OFF',
    AcceptedTypeWsudAccepted = 'ACCEPTED_TYPE_WSUD_ACCEPTED',
    AcceptedTypeOther = 'ACCEPTED_TYPE_OTHER',
    CanceledTypeUnknown = 'CANCELED_TYPE_UNKNOWN',
    CanceledTypeCustomerRequested = 'CANCELED_TYPE_CUSTOMER_REQUESTED',
    CanceledTypeMerchantCredited = 'CANCELED_TYPE_MERCHANT_CREDITED',
    CanceledTypeAgentError = 'CANCELED_TYPE_AGENT_ERROR',
    CanceledTypeOther = 'CANCELED_TYPE_OTHER',
    DeniedTypeUnknown = 'DENIED_TYPE_UNKNOWN',
    DeniedTypeChargebackLost = 'DENIED_TYPE_CHARGEBACK_LOST',
    DeniedTypeFriendlyFraud = 'DENIED_TYPE_FRIENDLY_FRAUD',
    DeniedTypeInsufficientEvidence = 'DENIED_TYPE_INSUFFICIENT_EVIDENCE',
    DeniedTypeWsudRejected = 'DENIED_TYPE_WSUD_REJECTED',
    DeniedTypeOther = 'DENIED_TYPE_OTHER'
}

export type DebitCardDisputeTransaction = {
    id: string;
    debitCardDisputeId: string;
    transactionId: string;
    transaction: TransactionSummary;
    disputeAmountCents: number;
    chargebackWonCents: number | null;
    casapFinalDecisionType: CasapFinalDecisionType | null;
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