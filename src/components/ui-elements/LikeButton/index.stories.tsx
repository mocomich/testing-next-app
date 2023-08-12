import { StoryObj, Meta } from '@storybook/react'

import { LikeButton } from '.'

const meta: Meta<typeof LikeButton> = {
  title: 'ui-elements/LikeButton',
  component: LikeButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof LikeButton>

export const Default: Story = {
  args: {
    likeCount: 10,
  },
}
