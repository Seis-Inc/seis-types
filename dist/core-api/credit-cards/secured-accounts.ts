import { ListOptions } from "../common/ListOptions";
import { Page } from "../common/Page";

export enum CreditCardSecuredAccountStatus {
    Open = 'Open',
    Closed = 'Closed',
    Frozen = 'Frozen'
}

export type CreditCardSecuredAccount = {
    id: string;
    creditCardAccountId: string;
    accountNumber: string;
    status: CreditCardSecuredAccountStatus;
    balanceCents: number;
    holdCents: number;
    availableCents: number;
    createdAt: string;
    updatedAt: string;
};

export type CreateCreditCardSecuredAccountInput = Omit<CreditCardSecuredAccount, 'id' | 'accountNumber' |'createdAt' | 'updatedAt'>;
export type PatchCreditCardSecuredAccountInput = Partial<CreateCreditCardSecuredAccountInput>;


export type CreditCardSecuredAccountTransactionFilter = {
    creditCardSecuredAccountId?: string;
    fromDate?: string;
    toDate?: string;
} & ListOptions

export enum CreditCardSecuredAccountTransactionDirection {
	Debit = 'Debit',
	Credit = 'Credit'
}

export type CreditCardSecuredAccountTransaction = {
	id: string;
    creditCardSecuredAccountId: string;
	createdAt: string;
	direction: CreditCardSecuredAccountTransactionDirection;
	amountCents: number;
    balanceCents: number;
    source: string;
    sourceId: string;
    securedAccount?: CreditCardSecuredAccount;
};

export type CreditCardSecuredAccountTransactionPage = Page<CreditCardSecuredAccountTransaction>;

export type CreateCreditCardSecuredAccountTransactionInput = Omit<CreditCardSecuredAccountTransaction, 'createdAt'>;

export type CreditCardSecuredAccountFilter = {
    id?: string;
    creditCardAccountId?: string;
    status?: CreditCardSecuredAccountStatus;
} & ListOptions

export type CreditCardSecuredAccountTransactions = {
    transactions: CreditCardSecuredAccountTransaction[];
    totalAmountCents: number;
};

export type CreditCardSecuredAccountPage = Page<CreditCardSecuredAccount>;

export type CreditCardSecuredAccountTransferJob = {
    id: string;
    jobId: string;
    creditCardSecuredAccountId: string;
    amountCents: number;
    balanceCents: number;
    estimatedSettlementDate: string | null,
    reportDate: string,
    unitPaymentId: string | null,
    createdAt: string;
};

export type CreateCreditCardSecuredAccountTransferJobInput = Omit<CreditCardSecuredAccountTransferJob, 'id' | 'createdAt'>;

export type CreditCardSecuredAccountTransferJobTransaction = {
    id: string;
    creditCardSecuredAccountTransferJobId: string;
    transactionId: string;
    createdAt: string;
};

export type CreditCardSecuredAccountTransferJobPage = Page<CreditCardSecuredAccountTransferJob>;

export type CreditCardSecuredAccountTransferJobFilter = {
    creditCardSecuredAccountId?: string;
} & ListOptions

export type CreateCreditCardSecuredAccountTransferJobTransactionInput = Omit<CreditCardSecuredAccountTransferJobTransaction, 'id' | 'createdAt'>;

export type WithdrawFundsFromSecuredAccountInput = {
    creditCardSecuredAccountTransactionId: string;
    creditCardSecuredAccountId: string;
    amountCents: number;
    createdAt?: string;
    source?: string;
    sourceId?: string;
}

export type DepositFundsToSecuredAccountInput = {
    creditCardSecuredAccountTransactionId: string;
    creditCardSecuredAccountId: string;
    amountCents: number;
    createdAt?: string;
    source: string;
    sourceId: string;
}

