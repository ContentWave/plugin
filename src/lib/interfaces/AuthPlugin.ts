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
  getAuthType(): 'oauth2'
  getButtonStyle(): AuthButtonStyle
  getRedirectUri(redirectUri: string, state: string): string
  processCallback(redirectUri: string, code: string): Promise<SsoUserData>
}
