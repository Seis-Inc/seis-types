export type CreditCard = {
  id: string;
  userId: string;
  type: string;
  status: string;
  design: string;
  expirationDate: string;
  last4Digits: string;
  bin: string;
  shippingMethod: string | null;
  token: string;
  digitalCardArtToken: string | null;
  createdAt: string;
  updatedAt: string;
};


