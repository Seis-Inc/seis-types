import { ListOptions } from "../common/ListOptions"
import { Page } from "../common/Page"

export type CreditCardApplicationDocument = {
    id: string
    userId: string
    leadName: string
    type: string
    creditCardApplicationId: string
    acceptedAt: string | null
    uploadedToLeadAt: string | null
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

  export type CreditCardApplicationDocumentPage =
    Page<CreditCardApplicationDocument>
