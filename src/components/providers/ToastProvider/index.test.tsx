import userEvent from '@testing-library/user-event'
import { useToastAction } from './hooks'
import { render, screen, waitFor } from '@testing-library/react'
import { ToastProvider } from '.'
import { act } from 'react-dom/test-utils'

const user = userEvent.setup()

const TestComponent = () => {
  const { showToast } = useToastAction()
  return (
    <button onClick={() => showToast({ message: 'test' })}>Show Toast</button>
  )
}
test('showToastメソッドを呼び出すと、Toastコンポーネントがマウントされる', async () => {
  act(() => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>,
    )
  })
  // 最初はマウントされない
  expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  user.click(screen.getByRole('button'))
  await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())
})
