import {TransactionType} from "./TransactionType";

export type TransactionFilter = {
  id?: string,
  accountId?: string
  search?: string
  type?: TransactionType
  direction?: 'Credit' | 'Debit'
  orderBy?: 'NewestFirst' | 'OldestFirst'
  createdAfter?: string
  createdBefore?: string
  offset?: number
  limit?: number
  checkForCashbackRewards?: Boolean
  cardIds?: string[]
}