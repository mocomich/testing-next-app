import { act, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import { Input } from '.'

test("[role='textbox']", () => {
  render(<Input />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})

test("[disabled='true']", async () => {
  render(<Input disabled />)
  expect(screen.getByRole('textbox')).toBeDisabled()
})

test('Accessible', async () => {
  const { container } = render(<Input />)
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
