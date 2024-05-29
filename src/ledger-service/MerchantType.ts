export type MerchantType = {
  id: string;
  mcc: string;
  rangeStart: string;
  rangeEnd: string;
  rangeDescription: string;
  rangeReserved: boolean;
  isoDescription: string;
  usdaDescription: string;
  stripeDescription: string;
  stripeCode: string;
  visaDescription: string;
  visaReqClearingName: string;
  name: string;
  subCategory: string;
  subCategoryEs: string | null;
  nameEs: string | null;
  imageUrl: string | null;
}