import { CreditCard } from "./CreditCard";

export type CreditCardInput = Omit<CreditCard, 'id' | 'createdAt' | 'updatedAt' | 'activatedAt' | 'canceledAt' | 'cancelationReason'>;

