import { Page} from "../common/Page";
import { ListOptions } from "../common/ListOptions"

export type CreditCardDisclosureDocument = {
  id: string;
  userId: string;
  disclosureName: string;
  s3DocumentKey: string;
  creditCardApplicationId: string;
  createdAt: string;
  updatedAt: string;
}

export type CreditCardDisclosureDocumentInput = {
  userId: string;
  disclosureName: string;
  s3DocumentKey: string;
  creditCardApplicationId: string;
}

export type CreditCardDisclosureDocumentFilter = {
  id?: string;
  userId?: string;
  creditCardApplicationId?: string;
} & ListOptions;

export type CreditCardDisclosureDocumentPage = Page<CreditCardDisclosureDocument>
