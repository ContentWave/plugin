import { Plugin } from './Plugin'

export interface SmsPlugin extends Plugin {
  sendSMS(user: any, text: string): Promise<boolean>
}
