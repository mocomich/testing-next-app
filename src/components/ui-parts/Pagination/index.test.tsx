import { render, screen } from '@testing-library/react'
import { Pagination } from '.'
import userEvent from '@testing-library/user-event'
import mockRouter from 'next-router-mock'
import { generatePagination } from '@/libs/utils/pagination'

const user = userEvent.setup()

const clickLink = (name: string) =>
  user.click(screen.getByRole('link', { name }))

test('currentPage=0の場合、ページネーションがレンダリングされない', () => {
  render(<Pagination pathname="/" pagination={generatePagination(0, 9)} />)
  expect(
    screen.queryByRole('navigation', { name: 'ページネーション' }),
  ).toBeNull()
})

test('currentPageが0以上の場合、ページネーションがレンダリングされる', () => {
  render(<Pagination pathname="/" pagination={generatePagination(1, 9)} />)
  expect(
    screen.queryByRole('navigation', { name: 'ページネーション' }),
  ).toBeInTheDocument()
})

test('pagesクエリが変更される', async () => {
  mockRouter.setCurrentUrl('/?page=1')
  render(<Pagination pathname="/" pagination={generatePagination(1, 9)} />)
  expect(mockRouter).toMatchObject({ query: { page: '1' } })
  await clickLink('2')
  expect(mockRouter).toMatchObject({ query: { page: '2' } })
})

test('ページのカレントが作用する', async () => {
  mockRouter.setCurrentUrl('/?page=1')
  render(<Pagination pathname="/" pagination={generatePagination(1, 9)} />)
  expect(screen.getByRole('link', { name: '1' })).toHaveAttribute(
    'aria-current',
    'page',
  )
  await clickLink('2')
  expect(screen.getByRole('link', { name: '2' })).toHaveAttribute(
    'aria-current',
    'page',
  )
})
