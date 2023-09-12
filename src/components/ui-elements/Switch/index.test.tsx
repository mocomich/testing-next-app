import { act, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import { Switch } from '.'
const id = 'id'

test('[disabled="true"]', () => {
  render(<Switch id={id} disabled />)
  expect(screen.getByRole('checkbox')).toBeInTheDocument()
  expect(screen.getByRole('checkbox')).toBeDisabled()
})

test("[checked='true']", () => {
  render(<Switch id={id} defaultChecked={true} />)
  expect(screen.getByRole('checkbox')).toBeChecked()
})

test('Accessible', async () => {
  const { container } = render(<Switch id={id} />)
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
