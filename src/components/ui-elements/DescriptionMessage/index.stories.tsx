import { StoryObj, Meta } from '@storybook/react'

import { DescriptionMessage } from '.'

const meta: Meta<typeof DescriptionMessage> = {
  title: 'ui-elements/DescriptionMessage',
  component: DescriptionMessage,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DescriptionMessage>

export const Default: Story = {
  args: { children: '本文概要' },
}
