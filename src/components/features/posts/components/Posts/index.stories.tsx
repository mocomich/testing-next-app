import { StoryObj, Meta } from '@storybook/react'
import { getPostsData } from '@/services/server/Posts/__mocks__/fixtures'

import { Posts } from '.'

const meta: Meta<typeof Posts> = {
  title: 'features/Posts',
  component: Posts,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Posts>

export const Main: Story = {
  args: { ...getPostsData },
}
