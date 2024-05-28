import {AuthorizationStatus} from "./AuthorizationStatus";

export type AuthorizationFilter = {
  accountId: string
  search?: string
  orderBy?: 'NewestFirst' | 'OldestFirst'
  createdAfter?: string
  createdBefore?: string
  statusIn?: AuthorizationStatus[],
  nonZero?: true,
  offset?: number
  limit?: number
}