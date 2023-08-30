import { StoryObj, Meta } from '@storybook/react'

import { SwitchWithLabel } from '.'

const meta: Meta<typeof SwitchWithLabel> = {
  title: 'ui-parts/SwitchWithLabel',
  component: SwitchWithLabel,
  args: {
    title: '公開ステータス',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SwitchWithLabel>

export const Default: Story = {
  args: {},
}
