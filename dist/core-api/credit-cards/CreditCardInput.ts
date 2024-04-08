
export type CreditCardInput = {
  userId: string;
  type: string;
  status: string;
  design: string;
  expirationDate: string;
  last4Digits: string;
  bin: string;
  shippingMethod: string;
  token: string;
  digitalCardArtToken: string | null;
};

