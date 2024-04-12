import { ListOptions } from "../common/ListOptions"
import { Page } from "../common/Page"

export type CreditCardApplicationDocument = {
    id: string
    userId: string
    leadName: string
    type: string
    creditCardApplicationId: string
    acceptedAt: string
    uploadedToLeadAt: string
    createdAt: string
    updatedAt: string
  }

  export type CreditCardApplicationDocumentInput = {
    userId: string
    type: string
    leadName: string
    creditCardApplicationId: string
    uploadedToLeadAt: string
    acceptedAt: string
  }

  export type CreditCardApplicationDocumentFilter = {
    id?: string
    userId?: string
    creditCardApplicationId?: string
    type?: string
  } & ListOptions

  export type CreditCardDisclosureDocumentPage =
    Page<CreditCardApplicationDocument>
