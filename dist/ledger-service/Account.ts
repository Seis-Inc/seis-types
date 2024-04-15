import {DateTime, Uuid} from "../general";

export type Account = {
  id: Uuid;
  balanceCents: number;
  availableCents: number;
  holdCents: number;
  limitCents: number;
  name: string;
  externalId: string;
  eventId: string;
  createdAt: DateTime;
}