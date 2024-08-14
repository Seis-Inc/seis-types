import { ListOptions } from "../common/ListOptions";
import { Page } from "../common/Page";

export type CreditCardReward = {
	id: string;
	userId: string;
	type: string;
	creditCardAccountId: string;
	creditCardTransactionId: string;
	rewardAmountCents: number;
	createdAt: string;
	updatedAt: string | null;
	paidAt: string | null;
	unitTransactionId: string | null;
};

export type CreditCardRewardPatch = {
	id: string;
	paidAt: string | null;
	unitTransactionId: string | null;
};

export type CreditCardRewardInput = {
	userId: string;
	isEmployee: boolean;
	type: string;
	creditCardAccountId: string;
	creditCardTransactionId: string;
	transactionAmountCents: number;
	rewardLimitCents: number;
	createdAt: string | null;
	createdBefore: string;
	createdAfter: string;
};

export type CreditCardRewardFilter = {
	userId?: string;
	type?: string;
	createdBefore?: string;
	createdAfter?: string;
} & ListOptions;

export type CreditCardRewardPage = Page<CreditCardReward>;
