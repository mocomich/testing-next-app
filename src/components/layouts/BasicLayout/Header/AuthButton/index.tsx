import { AnchorButton } from '@/components/ui-elements/AnchorButton'
import { UserContext } from '@auth0/nextjs-auth0/client'
import * as React from 'react'

type Props = UserContext

export const AuthPath = {
  login: '/api/auth/login',
  logout: '/api/auth/logout',
} as const

export const AuthButton = ({ ...props }: Props) => {
  const isUser = !!props.user

  return (
    <AnchorButton
      variant={'secondary'}
      href={isUser ? AuthPath.logout : AuthPath.login}
    >
      {isUser ? 'Logout' : 'Login'}
    </AnchorButton>
  )
}
