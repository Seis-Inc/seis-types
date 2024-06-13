import {AuthorizationEventType} from "./AuthorizationEventType";

export type AuthorizationEvent = {
  id: string;
  type: AuthorizationEventType;
  holdAmountCents: number;
  availableCents: number;
  accountId: string;
  eventId: string;
  authorizationId: string;
  createdAt: string;
}