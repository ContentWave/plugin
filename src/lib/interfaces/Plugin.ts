import { Swarm } from '@swarmjs/core'
import { PluginTypes } from './PluginTypes'
import { FormFields } from './FormFields'
import { I18nString } from './I18nString'

export interface Plugin {
  getName(): I18nString
  getDescription(): I18nString
  getLogo(): string
  getType(): PluginTypes | PluginTypes[]
  getVersion(): string
  getMinVersionSupported(): string | null
  getMaxVersionSupported(): string | null
  setup(instance: Swarm, conf: object): Promise<void>
  getPluginConfig(): FormFields
}
