import { Plugin } from './Plugin'

interface EmailAttachment {
  content: Buffer
  filename: string
}

export interface EmailPlugin extends Plugin {
  sendEmail(
    user: any,
    subject: string,
    html: string,
    files?: EmailAttachment[]
  ): Promise<boolean>
}
