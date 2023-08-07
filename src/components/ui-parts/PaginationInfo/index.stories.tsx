import { Meta, StoryObj } from '@storybook/react'
import { PaginationInfo } from './'

const meta: Meta<typeof PaginationInfo> = {
  title: 'ui-parts/PaginationInfo',
  component: PaginationInfo,
  args: { start: 1, end: 10, postCount: 100 },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof PaginationInfo>

export const Default: Story = {}
