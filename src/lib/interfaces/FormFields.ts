import { I18nString } from './I18nString'
import { ISOCountry } from './ISOCountry'
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
    | 'time'
    | 'duration'
    | 'email'
    | 'file'
    | 'image'
    | 'integer'
    | 'number'
    | 'phone'
    | 'radio'
    | 'text'
    | 'textarea'
    | 'form'
    | 'array'
    | 'select'
    | 'postaladdress'
    | 'user'
    | 'ref'
    | 'html'
  required?: boolean
  default?: any
  validation?: JSONSchema7
}

interface GenericFormField extends BaseFormField {
  type:
    | 'boolean'
    | 'date'
    | 'datetime'
    | 'time'
    | 'duration'
    | 'email'
    | 'file'
    | 'image'
    | 'integer'
    | 'number'
    | 'phone'
    | 'text'
    | 'textarea'
    | 'postaladdress'
    | 'user'
    | 'html'
}

interface SelectFormField extends BaseFormField {
  type: 'select' | 'radio'
  options: FormSelectOption[]
}

interface PhoneFormField extends BaseFormField {
  type: 'phone'
  defaultCountry: ISOCountry
}

interface FormOrArrayFormField extends BaseFormField {
  type: 'array' | 'form'
  items: FormFields
}

interface RefFormField extends BaseFormField {
  type: 'ref'
  model: string
}

type FormField =
  | GenericFormField
  | SelectFormField
  | FormOrArrayFormField
  | PhoneFormField
  | RefFormField

export type FormFields = { [key: string]: FormField }
