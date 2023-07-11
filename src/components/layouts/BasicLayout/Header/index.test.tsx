import { render, screen } from '@testing-library/react';
import { Header } from '.';

// developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/banner_role
// <aside>、<article>、<main>、<nav>、または <section> の子孫でない限り、バナー (banner) ランドマークと同じ意味を持つ
https: test('role=["banner"]', () => {
  render(<Header />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
});
