import { render, screen } from '@testing-library/react'

import { Input } from '.'

test("[role='textbox']", () => {
  render(<Input />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})

test("[disabled='true']", async () => {
  render(<Input disabled />)
  expect(screen.getByRole('textbox')).toBeDisabled()
})
