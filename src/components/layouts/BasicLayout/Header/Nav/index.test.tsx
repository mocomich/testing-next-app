import { render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { Nav, NavPaths } from '.'

test.each([
  { url: NavPaths.MyPosts, name: 'My Posts' },
  { url: NavPaths.CreatePost, name: 'Create Post' },
])('$url では $name がcurrentになっている', ({ url, name }) => {
  mockRouter.setCurrentUrl(url)
  render(<Nav />)
  const link = screen.getByRole('link', { name })
  expect(link).toHaveAttribute('aria-current', 'page')
})
