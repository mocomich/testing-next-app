import { StoryObj, Meta } from '@storybook/react'

import { Textarea } from '.'

const meta: Meta<typeof Textarea> = {
  title: 'ui-elements/Textarea',
  component: Textarea,
  args: {
    placeholder: '文字を入力',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {},
}

export const Disabled: Story = {
  args: { disabled: true },
}
