import { render, screen } from '@testing-library/react'

import { LikeButton } from '.'

test('role=["button"]', () => {
  render(<LikeButton likeCount={1} />)
  expect(screen.getByRole('button')).toBeInTheDocument()
})

test('buttonにaria属性が設定されている', () => {
  render(<LikeButton likeCount={1} />)
  expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'いいね')
})
