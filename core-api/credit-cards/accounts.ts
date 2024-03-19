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
    creditLimitCents: number;
    interestRate: number;
    balanceCents: number;
    name: string;
    idempotencyKey: string | null;
    createdAt: string;
    updatedAt: string;
};

export type CreateCreditCardAccountInput = {
  userId: string;
  creditLimitCents: number;
  interestRate: number;
  name: string;
  balanceCents: number;
};

export type FindCreditCardAccountInput = {
  id?: string;
  userId?: string;
} & ListOptions;