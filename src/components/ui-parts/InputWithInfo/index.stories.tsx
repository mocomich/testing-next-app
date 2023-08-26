import { StoryObj, Meta } from '@storybook/react'

import { InputWithInfo } from '.'

const meta: Meta<typeof InputWithInfo> = {
  title: 'ui-parts/InputWithInfo',
  args: { title: 'タイトル' },
  component: InputWithInfo,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof InputWithInfo>

export const Info: Story = {
  args: { info: '0 / 64' },
}

export const Description: Story = {
  args: { description: '半角英数64文字以内で入力してください' },
}

export const Error: Story = {
  args: { error: '不正な文字が含まれています' },
}

export const FullProps: Story = {
  args: {
    info: '0 / 64',
    description: '半角英数64文字以内で入力してください',
    error: '不正な文字が含まれています',
  },
}
