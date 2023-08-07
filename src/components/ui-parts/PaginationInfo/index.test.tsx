import { render, screen } from '@testing-library/react'
import { PaginationInfo } from '.'

test('role=["region"]', () => {
  render(<PaginationInfo start={1} end={9} postCount={90} />)
  expect(
    screen.getByRole('region', { name: '現在表示中の一覧概要' }),
  ).toBeInTheDocument()
})
