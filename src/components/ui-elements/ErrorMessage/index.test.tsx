import { act, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import { ErrorMessage } from '.'

test('role=["alert"] aria-live="off" ', () => {
  render(<ErrorMessage />)
  expect(screen.getByRole('alert')).toBeInTheDocument()
  expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'off')
})

test('Accessible', async () => {
  const { container } = render(<ErrorMessage />)
  await act(async () => {
    expect(await axe(container)).toHaveNoViolations()
  })
})
