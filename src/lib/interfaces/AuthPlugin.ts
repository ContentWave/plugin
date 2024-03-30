import { Plugin } from './Plugin'

export interface SsoUserData {
  id: string
  email: string
  avatar?: string
  firstname: string
  lastname: string
}

export interface AuthButtonStyle {
  label: string
  textColor: string
  backgroundColor: string
  icon: string
}

export interface AuthPlugin extends Plugin {
  getButtonStyle(): AuthButtonStyle
  getRedirectUri(redirectUri: string): string
  processCallback(code: string): Promise<SsoUserData>
}
