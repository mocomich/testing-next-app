import { Meta, StoryObj } from '@storybook/react'
import { ToastProvider } from '..'
import { ToastState } from '../ToastContext'
import { Toast } from '.'

function createDecorator(defaultState?: Partial<ToastState>) {
  return function Decorator() {
    return (
      <ToastProvider defaultState={{ ...defaultState, isShown: true }}>
        {null}
      </ToastProvider>
    )
  }
}

const meta: Meta<typeof Toast> = {
  title: 'Providers/ToastProvider',
  component: Toast,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toast>
export const Success: Story = {
  decorators: [createDecorator({ message: '成功しました', style: 'success' })],
}

export const Error: Story = {
  decorators: [createDecorator({ message: '失敗しました', style: 'error' })],
}
