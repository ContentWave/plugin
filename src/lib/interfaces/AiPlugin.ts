import { Plugin } from './Plugin'

export interface AiMessage {
  role: 'assistant' | 'user' | 'system'
  content: string
}

export interface AiReturn {
  tokens: number
  message: string | object
}

export interface AiPlugin extends Plugin {
  createChatCompletion(messages: AiMessage[], json?: boolean): Promise<AiReturn>
}
