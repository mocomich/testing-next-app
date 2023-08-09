import { render, screen } from '@testing-library/react'
import { Header } from '.'

test('role=["banner"]', () => {
  render(<Header />)
  expect(screen.getByRole('banner')).toBeInTheDocument()
})
