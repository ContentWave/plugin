import { Plugin } from './Plugin'

export interface AiImageReturn {
  src: string
}

export interface AiImagePlugin extends Plugin {
  generateAiImage(prompt: string): Promise<AiImageReturn>
}
