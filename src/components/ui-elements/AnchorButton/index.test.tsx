import { act, render, screen } from '@testing-library/react'

import { AnchorButton } from '.'

import { axe } from 'jest-axe'

test('role=["link"]', () => {
  render(<AnchorButton href={'/'} />)
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
  expect(screen.getByRole('link')).toBeInTheDocument()
})

test('Accessible', async () => {
  const { container } = render(<AnchorButton href={'/'}>Link</AnchorButton>)
  await act(async () => {
    expect(await axe(container)).toHaveNoViolations()
  })
})
