import { Plugin } from './Plugin'

export interface AiMessage {
  role: 'assistant' | 'user' | 'system'
  content: string
}

export interface AiReturn {
  tokens: number
  message: string | object
}

export type Vector = number[]

export interface AiTextPlugin extends Plugin {
  createChatCompletion(messages: AiMessage[], json?: boolean): Promise<AiReturn>
  vectorizeText(text: string): Promise<Vector>
}
