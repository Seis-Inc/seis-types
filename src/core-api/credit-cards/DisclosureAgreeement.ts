import { Page} from "../common/Page";
import { ListOptions } from "../common/ListOptions"

export type CreditCardDisclosureDocument = {
  id: string;
  userId: string;
  disclosureName: string;
  // @ts-ignore
  s3DocumentKey: string;
  createdAt: string;
  updatedAt: string;
}

export type CreditCardDisclosureDocumentInput = {
  userId: string;
  disclosureName: string;
  // @ts-ignore
  s3DocumentKey: string;
}

export type CreditCardDisclosureDocumentFilter = {
  id?: string;
  userId?: string;
} & ListOptions;

export type CreditCardDisclosureDocumentPage = Page<CreditCardDisclosureDocument>
