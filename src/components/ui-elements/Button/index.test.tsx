import { act, render, screen } from '@testing-library/react'
import { Button } from '.'

import { axe } from 'jest-axe'

test('role="button"', () => {
  render(<Button>Button</Button>)
  expect(screen.getByRole('button')).toBeInTheDocument()
})

test('Accessible', async () => {
  const { container } = render(<Button>Button</Button>)
  await act(async () => {
    expect(await axe(container)).toHaveNoViolations()
  })
})
