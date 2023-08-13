import { StoryObj, Meta } from '@storybook/react'

import { PostItem } from '.'
import { getPostsData } from '@/services/server/Posts/__mocks__/fixtures'

const meta: Meta<typeof PostItem> = {
  title: 'features/Posts/PostItem',
  component: PostItem,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PostItem>

export const Default: Story = {
  args: {
    post: getPostsData.posts[0],
  },
}
