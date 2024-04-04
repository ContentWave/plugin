import { I18nString } from './I18nString'
import { ISOLanguage } from './Languages'
import { Plugin } from './Plugin'

export interface I18nPlugin extends Plugin {
  translate(text: string, to: ISOLanguage, from?: ISOLanguage): Promise<string>
  translateI18nString(
    text: I18nString,
    to: ISOLanguage,
    from?: ISOLanguage
  ): Promise<I18nString>
}
