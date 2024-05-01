export type Address = {
  id: string;
  userId: string;
  address: string;
  isResidence: boolean;
  type: 'Home' | 'Mailing';
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  manualSecondary: string | null;
  latitude: number;
  longitude: number;
  ssId: string;
  createdAt: string;
  updatedAt: string;
};

