import { Plugin } from './Plugin'

export interface ErrorPlugin extends Plugin {
  handleError(err: Error): Promise<void>
}
