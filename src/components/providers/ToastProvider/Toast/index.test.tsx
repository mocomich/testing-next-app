import { render, screen } from '@testing-library/react'
import { ToastState } from '../ToastContext'
import { Toast } from '.'

test('Success', () => {
  const props: Omit<ToastState, 'isShown'> = {
    message: '成功しました',
    style: 'success',
  }
  render(<Toast {...props} />)
  expect(screen.getByRole('alert')).toHaveTextContent(props.message)
})

test('Error', () => {
  const props: Omit<ToastState, 'isShown'> = {
    message: 'エラーが発生しました',
    style: 'error',
  }
  render(<Toast {...props} />)
  expect(screen.getByRole('alert')).toHaveTextContent(props.message)
})
