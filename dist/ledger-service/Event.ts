import {EventData} from "./EventData";
import {EventType} from "./EventType";
import {Transaction} from "./Transaction";
import {AuthorizationEvent} from "./AuthorizationEvent";
import {ProcessedEvent} from "./ProcessedEvent";

export type Event<T> = {
  id: string;
  data: EventData & T;
  type: EventType;
  accountId: string | null;
  createdAt: string;
  transaction: Transaction | null;
  authorizationEvent: AuthorizationEvent | null;
  processedEvent: ProcessedEvent | null;
};
