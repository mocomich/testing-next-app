import { render, screen } from '@testing-library/react';
import { Footer } from '.';

// https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/contentinfo_role
test('role=["contentinfo"]', () => {
  render(<Footer />);
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});
