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
}

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
};

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