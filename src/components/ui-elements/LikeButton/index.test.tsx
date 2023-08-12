import { render, screen } from '@testing-library/react'

import { LikeButton } from '.'

test('role=["button"]', () => {
  render(<LikeButton likeCount={1} />)
  expect(screen.getByRole('button')).toBeInTheDocument()
})
