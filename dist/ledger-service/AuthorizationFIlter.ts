export type AuthorizationFilter = {
  accountId: string
  search?: string
  orderBy?: 'NewestFirst' | 'OldestFirst'
  createdAfter?: string
  createdBefore?: string
  offset?: number
  limit?: number
}