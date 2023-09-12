import { act, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import { Spinner } from '.'

test('role=["status"]', () => {
  render(<Spinner />)
  expect(screen.getByRole('status')).toBeInTheDocument()
})

test('Accessible', async () => {
  const { container } = render(<Spinner />)
  await act(async () => {
    expect(await axe(container)).toHaveNoViolations()
  })
})
