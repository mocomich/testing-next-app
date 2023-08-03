import { render, screen } from '@testing-library/react'
import { UserContext } from '@auth0/nextjs-auth0/client'
import { AuthButton, AuthPath } from '.'

test('role=["link"]', () => {
  const props: UserContext = {
    checkSession: async () => {},
    isLoading: false,
    user: {},
  }
  render(<AuthButton {...props} />)
  expect(screen.getByRole('link'))
})

test('Loginしていない場合、Loginが表示されている', () => {
  const props: UserContext = {
    checkSession: async () => {},
    isLoading: false,
  }
  render(<AuthButton {...props} />)
  const link = screen.getByRole('link')
  expect(link).toHaveAttribute('href', AuthPath.login)
  expect(link).toHaveTextContent('Login')
})

test('Login状態の場合、Logoutが表示されている', () => {
  const props: UserContext = {
    checkSession: async () => {},
    isLoading: false,
    user: {},
  }
  render(<AuthButton {...props} />)
  const link = screen.getByRole('link')
  expect(link).toHaveAttribute('href', AuthPath.logout)
  expect(link).toHaveTextContent('Logout')
})
