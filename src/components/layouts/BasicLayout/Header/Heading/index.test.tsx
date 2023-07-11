import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { Heading } from './';

const user = userEvent.setup();

test('role=["heading"]', () => {
  render(<Heading />);
  expect(screen.getByRole('heading')).toBeInTheDocument();
});

test('クリックするとトップ画面に遷移する', async () => {
  mockRouter.setCurrentUrl('/posts');
  render(<Heading />);
  await user.click(screen.getByRole('link'));
  expect(mockRouter).toMatchObject({ pathname: '/' });
});
