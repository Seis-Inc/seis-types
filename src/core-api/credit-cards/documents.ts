import { ListOptions } from "../common/ListOptions"
import { Page } from "../common/Page"

export type CreditCardApplicationDocument = {
    id: string
    userId: string
    leadName: string
    type: string
    creditCardApplicationId: string
    createdAt: string
    updatedAt: string
  }

  export type CreditCardApplicationDocumentInput = {
    userId: string
    type: string
    leadName: string
    creditCardApplicationId: string
  }

  export type CreditCardApplicationDocumentFilter = {
    id?: string
    userId?: string
    creditCardApplicationId?: string
  } & ListOptions

  export type CreditCardDisclosureDocumentPage =
    Page<CreditCardApplicationDocument>
