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
    balanceOwedCents: number;
    holdCents: number;
    availableCents: number;
    createdAt: string;
    updatedAt: string;
};

export type CreateCreditCardSecuredAccountInput = Omit<CreditCardSecuredAccount, 'id' | 'accountNumber' |'createdAt' | 'updatedAt'>;
export type PatchCreditCardSecuredAccountInput = Partial<CreateCreditCardSecuredAccountInput>;

export type CreditCardSecuredAccountFilter = {
    id?: string;
    creditCardAccountId?: string;
    status?: CreditCardSecuredAccountStatus;
} & ListOptions

export type CreditCardSecuredAccountPage = Page<CreditCardSecuredAccount>;