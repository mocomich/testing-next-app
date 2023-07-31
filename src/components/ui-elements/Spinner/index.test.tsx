import { render, screen } from '@testing-library/react'
import { Spinner } from '.'

test('role=["status"]', () => {
  render(<Spinner />)
  expect(screen.getByRole('status')).toBeInTheDocument()
})
