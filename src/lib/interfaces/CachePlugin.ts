import { Plugin } from './Plugin'

export interface CachePlugin extends Plugin {
  setCache(key: string, data: string): Promise<void>
  getCache(key: string, defaultData?: string): Promise<string>
  deleteCache(key: string): Promise<void>
}
