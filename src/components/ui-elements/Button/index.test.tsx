import { render, screen } from '@testing-library/react'
import { Button } from '.'

test('role="button"', () => {
  render(<Button>Button</Button>)
  expect(screen.getByRole('button')).toBeInTheDocument()
})
