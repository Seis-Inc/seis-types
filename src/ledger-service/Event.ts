import {EventData} from "./EventData";
import {EventType} from "./EventType";

export type Event<T> = {
  id: string;
  data: EventData & T;
  type: EventType;
  accountId:string | null;
  createdAt: string;
};
