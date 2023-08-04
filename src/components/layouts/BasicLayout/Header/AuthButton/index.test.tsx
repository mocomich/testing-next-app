import { render, screen } from '@testing-library/react'
import { AuthButton, AuthButtonProps, AuthPath } from '.'

test('role=["link"]', () => {
  const props: AuthButtonProps = {
    isUser: false,
  }
  render(<AuthButton {...props} />)
  expect(screen.getByRole('link'))
})

test('Loginしていない場合、Loginが表示されている', () => {
  const props: AuthButtonProps = {
    isUser: false,
  }
  render(<AuthButton {...props} />)
  const link = screen.getByRole('link')
  expect(link).toHaveAttribute('href', AuthPath.login)
  expect(link).toHaveTextContent('Login')
})

test('Login状態の場合、Logoutが表示されている', () => {
  const props: AuthButtonProps = {
    isUser: true,
  }
  render(<AuthButton {...props} />)
  const link = screen.getByRole('link')
  expect(link).toHaveAttribute('href', AuthPath.logout)
  expect(link).toHaveTextContent('Logout')
})
