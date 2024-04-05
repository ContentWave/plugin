import { PluginTypes } from './PluginTypes'
import { FormFields } from './FormFields'
import { I18nString } from './I18nString'

export interface Plugin {
  getName(): I18nString
  getDescription(): I18nString
  getLogo(): string
  getType(): PluginTypes | PluginTypes[]
  getVersion(): string
  getVersionRequirements(): string | null
  setup(conf: object): Promise<void>
  getPluginConfig(): FormFields
}
