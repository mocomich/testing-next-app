import { AnchorButton } from '@/components/ui-elements/AnchorButton'
import * as React from 'react'

export type AuthButtonProps = {
  isUser: boolean
}

export const AuthPath = {
  login: '/api/auth/login',
  logout: '/api/auth/logout',
} as const

export const AuthButton = ({ isUser }: AuthButtonProps) => {
  return (
    <AnchorButton
      variant={'secondary'}
      href={isUser ? AuthPath.logout : AuthPath.login}
    >
      {isUser ? 'Logout' : 'Login'}
    </AnchorButton>
  )
}
