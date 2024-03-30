import { I18nString } from './I18nString'
import { JSONSchema7 } from './JsonSchema'

interface FormSelectOption {
  label: I18nString
  value: string
}

interface BaseFormField {
  label: I18nString
  type:
    | 'boolean'
    | 'date'
    | 'datetime'
    | 'email'
    | 'file'
    | 'hour'
    | 'image'
    | 'number'
    | 'phone'
    | 'radio'
    | 'text'
    | 'textarea'
    | 'form'
    | 'array'
    | 'select'
  required?: boolean
  default?: any
  validation?: JSONSchema7
}

interface GenericFormField extends BaseFormField {
  type:
    | 'boolean'
    | 'date'
    | 'datetime'
    | 'email'
    | 'file'
    | 'hour'
    | 'image'
    | 'number'
    | 'phone'
    | 'radio'
    | 'text'
    | 'textarea'
}

interface SelectFormField extends BaseFormField {
  type: 'select'
  options: FormSelectOption[]
}

interface FormOrArrayFormField extends BaseFormField {
  type: 'array' | 'form'
  items: FormFields
}

type FormField = GenericFormField | SelectFormField | FormOrArrayFormField

export type FormFields = { [key: string]: FormField }
