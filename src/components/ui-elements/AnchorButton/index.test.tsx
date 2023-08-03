import { render, screen } from '@testing-library/react'

import { AnchorButton } from '.'

test('role=["link"]', () => {
  render(<AnchorButton href={'/'} />)
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
  expect(screen.getByRole('link')).toBeInTheDocument()
})
