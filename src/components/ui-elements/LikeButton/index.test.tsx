import { render, screen, act } from '@testing-library/react'
import { axe } from 'jest-axe'

import { LikeButton } from '.'

test('role=["button"]', () => {
  render(<LikeButton likeCount={1} />)
  expect(screen.getByRole('button')).toBeInTheDocument()
})

test('buttonにaria属性が設定されている', () => {
  render(<LikeButton likeCount={1} />)
  expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'いいね')
})

test('Accessible', async () => {
  const { container } = render(<LikeButton likeCount={1} />)
  await act(async () => {
    expect(await axe(container)).toHaveNoViolations()
  })
})
