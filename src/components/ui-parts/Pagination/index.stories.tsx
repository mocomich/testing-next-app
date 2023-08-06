import { generatePagination } from '@/libs/utils/pagination'
import { Pagination } from './'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Pagination> = {
  title: 'ui-parts/Pagination',
  component: Pagination,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Pagination>

const getStory = (page: number): Story => ({
  args: {
    pagination: generatePagination(page, 9),
    pathname: `/?page=${page}`,
  },
  parameters: {
    nextRouter: { query: { page: `${page}` } },
  },
})

export const Page1: Story = getStory(1)
export const Page2: Story = getStory(2)
export const Page3: Story = getStory(3)
export const Page4: Story = getStory(4)
export const Page5: Story = getStory(5)
export const Page9: Story = getStory(9)
