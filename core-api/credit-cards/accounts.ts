import { ListOptions } from "../";

export enum CreditCardAccountStatus {
    Open = 'Open',
    Closed = 'Closed',
    Frozen = 'Frozen'
}

export type CreditCardAccount = {
    id: string;
    userId: string;
    status: CreditCardAccountStatus;
    creditLimitCents: number
    interestRate: number
    idempotencyKey: string | null;
    createdAt: string;
    updatedAt: string;
};

export type CreateCreditCardAccountInput = {
  userId: string;
  creditLimitCents: number;
  interestRate: number;
};

export type FindCreditCardAccountInput = {
  id?: string;
  userId?: string;
} & ListOptions;