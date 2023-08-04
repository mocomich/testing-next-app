import { render, screen } from '@testing-library/react'
import { Header } from '.'

// developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/banner_role
// <aside>、<article>、<main>、<nav>、または <section> の子孫でない限り、バナー (banner) ランドマークと同じ意味を持つ
test('role=["banner"]', () => {
  render(<Header isUser />)
  expect(screen.getByRole('banner')).toBeInTheDocument()
})

test('未ログイン時 Nav が表示されない', () => {
  render(<Header isUser={false} />)
  expect(screen.queryByLabelText('ナビゲーション')).not.toBeInTheDocument()
})

test('ログイン時 Nav が表示される', () => {
  render(<Header isUser />)
  expect(screen.getByLabelText('ナビゲーション')).toBeInTheDocument()
})
