import { ListOptions } from "../common/ListOptions"
import { Page } from "../common/Page"

export type CreditCardApplicationDocument = {
    id: string
    userId: string
    leadName: string | null
    type: string
    creditCardApplicationId: string
    acceptedAt: string | null
    uploadedToLeadAt: string | null
    createdAt: string
    updatedAt: string
    consentUserIpAddress?: string
    consentUserAgent?: string
  }

  export type CreditCardApplicationDocumentInput = {
    userId: string
    type: string
    leadName?: string
    creditCardApplicationId: string
    uploadedToLeadAt?: string
    acceptedAt?: string
    consentUserIpAddress?: string
    consentUserAgent?: string
  }

  export type CreditCardApplicationDocumentFilter = {
    id?: string
    userId?: string
    creditCardApplicationId?: string
    type?: string
  } & ListOptions

  export type CreditCardApplicationDocumentPage =
    Page<CreditCardApplicationDocument>
