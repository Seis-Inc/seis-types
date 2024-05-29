import { ListOptions } from "../common/ListOptions";
import { Page } from "../common/Page";

export enum CreditCardDisputeStatus {
    Pending = 'Pending',
    Denied = 'Denied',
    ResolvedLost = 'ResolvedLost',
    ResolvedWon = 'ResolvedWon'
};

export type CreditCardDispute = {
    id: string;
    transactionId: string;
    creditCardAccountId: string;
    disputeAmountCents: number;
    disputeReason: string;
    status: CreditCardDisputeStatus;
    reissuedTransactionId: string | null;
    provisionalCreditTransactionId: string | null;
    provisionalCreditIssuedAt: string | null;
    provisionalCreditReversalTransactionId: string | null;
    provisionalCreditReversalIssuedAt: string | null;
    resolvedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

export type CreateCreditCardDisputeInput = Omit<CreditCardDispute, 'id' | 'createdAt' | 'updatedAt'>;

export type PatchCreditCardDisputeInput = Partial<Omit<CreditCardDispute, 'id' | 'transactionId' | 'creditCardAccountId' | 'createdAt' | 'updatedAt'>>;

export type FindCreditCardDisputeInput = Partial<Omit<CreditCardDispute, 'createdAt' | 'updatedAt'>>
    & {userId?: string} & ListOptions;

export type CreditCardDisputePage = Page<CreditCardDispute>;