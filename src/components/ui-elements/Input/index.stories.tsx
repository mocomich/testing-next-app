import { StoryObj, Meta } from '@storybook/react'

import { Input } from '.'

const meta: Meta<typeof Input> = {
  title: 'ui-elements/Input',
  component: Input,
  parameters: {
    a11y: {
      config: { rules: [{ id: 'label', enabled: false }] },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    type: 'email',
    placeholder: 'Email',
  },
}

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'テキストを入力',
    disabled: true,
  },
}

export const File: Story = {
  args: {
    type: 'file',
  },
}
