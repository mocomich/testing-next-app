import { act, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import { Link } from '.'

test('role=["link"]', () => {
  render(<Link href="#" />)
  expect(screen.getByRole('link')).toBeInTheDocument()
})

test('Accessible', async () => {
  const { container } = render(<Link href="#">Link</Link>)
  await act(async () => {
    expect(await axe(container)).toHaveNoViolations()
  })
})
