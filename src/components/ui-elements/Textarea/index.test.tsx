import { act, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import { Textarea } from '.'

test('role=["textbox"]', () => {
  render(<Textarea />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})

test('disabled=["true"]', () => {
  render(<Textarea disabled />)
  expect(screen.getByRole('textbox')).toBeDisabled()
})

test('Accessible', async () => {
  const { container } = render(<Textarea />)
  await act(async () => {
    expect(
      await axe(container, {
        rules: {
          label: { enabled: false },
        },
      }),
    ).toHaveNoViolations()
  })
})
