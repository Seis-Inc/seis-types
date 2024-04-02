import {AuthorizationEventType} from "./AuthorizationEventType";

export type AuthorizationEvent = {
  id: string;
  type: AuthorizationEventType;
  holdAmountCents: number;
  accountId: string;
  eventId: string;
  authorizationId: string | null;
  createdAt: string;
}