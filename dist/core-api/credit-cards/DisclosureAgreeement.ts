import { Page} from "../common/Page";
import { ListOptions } from "../common/ListOptions"

export type CreditCardDisclosureDocument = {
  id: string;
  userId: string;
  disclosureName: string;
  htmlContent: Buffer;
  createdAt: string;
  updatedAt: string;
}

export type CreditCardDisclosureDocumentInput = {
  userId: string;
  disclosureName: string;
  htmlContent: Buffer;
}

export type CreditCardDisclosureDocumentFilter = {
  id?: string;
  userId?: string;
} & ListOptions;

export type CreditCardDisclosureDocumentPage = Page<CreditCardDisclosureDocument>
