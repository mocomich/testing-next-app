import { render, screen } from '@testing-library/react'

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
