import { Plugin } from './Plugin'

export interface FsPlugin extends Plugin {
  storeFile(buffer: Buffer, filename: string): Promise<string>
}
