import { StoryObj, Meta } from '@storybook/react'

import { ErrorMessage } from '.'

const meta: Meta<typeof ErrorMessage> = {
  title: 'ui-elements/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ErrorMessage>

export const Default: Story = {
  args: { children: '入力必須です' },
}
