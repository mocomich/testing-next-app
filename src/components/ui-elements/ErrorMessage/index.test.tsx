import { render, screen } from '@testing-library/react'

import { ErrorMessage } from '.'

test('role=["alert"] aria-live="off" ', () => {
  render(<ErrorMessage />)
  expect(screen.getByRole('alert')).toBeInTheDocument()
  expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'off')
})
