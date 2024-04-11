import { Plugin } from './Plugin'

export interface IInvoiceLine {
  name: string
  unit: number
  qty: number
  total: number
  tax: number
}

export interface IInvoice {
  id: string
  name: string
  total: number
  tax: number
  lines: IInvoiceLine[]
  payed: boolean
  payedAt: Date
  issuedAt: Date
}

export interface ISubscription {
  id: string
  subscriptionId: string
  name: string
  startedAt: Date
  period: 'daily' | 'weekly' | 'monthly' | 'yearly'
  amount: number
  nextInvoiceDate: Date
  canceled: boolean
}

export interface PaymentsPlugin extends Plugin {
  getInvoices(user: any): Promise<IInvoice[]>
  getInvoice(user: any, id: string): Promise<IInvoice | null>
  getInvoicePdf(user: any, id: string): Promise<string | null>
  askPayment(user: any, lines: IInvoiceLine[]): Promise<IInvoice | null>
  getSubscriptions(user: any): Promise<ISubscription[]>
  getSubscription(user: any, id: string): Promise<ISubscription>
  createSubscription(user: any, id: string): Promise<ISubscription | null>
  cancelSubscription(user: any, id: string): Promise<boolean>
}
