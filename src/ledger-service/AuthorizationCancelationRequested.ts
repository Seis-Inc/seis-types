export type AuthorizationCancelationRequested = {
  authorizationId:string;
  reason: 'UnauthorizedMerchant' | 'VelocityExceeded' | 'MerchantVoided' | null
}
