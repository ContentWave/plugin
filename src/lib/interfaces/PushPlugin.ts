import { Plugin } from './Plugin'

interface PushNotificationAction {
  title: string
  link: string
}

interface PushNotificationContent {
  title?: string
  content: string
  actions?: PushNotificationAction[]
}

export interface PushPlugin extends Plugin {
  sendPushNotification(
    user: any,
    content: PushNotificationContent
  ): Promise<boolean>
}
