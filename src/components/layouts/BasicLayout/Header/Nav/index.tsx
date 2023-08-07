import * as React from 'react'
import { Link } from '@/components/ui-elements/Link'
import { useRouter } from 'next/router'

/**
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current
 * @param flag
 * @returns
 */
const isCurrent = (
  flag: boolean,
): React.AnchorHTMLAttributes<HTMLAnchorElement> => {
  if (!flag) return {}
  return { 'aria-current': 'page' }
}

export const NavPaths = {
  MyPosts: '/my/posts',
  CreatePost: '/my/posts/create',
}

export const Nav = () => {
  const { pathname } = useRouter()

  return (
    <nav aria-label="ナビゲーション">
      <ul className="flex items-center gap-8">
        <li>
          <Link
            href={NavPaths.MyPosts}
            className="aria-[current]:font-bold"
            {...isCurrent(pathname === NavPaths.MyPosts)}
          >
            My Posts
          </Link>
        </li>
        <li>
          <Link
            href={NavPaths.CreatePost}
            className="aria-[current]:font-bold"
            {...isCurrent(pathname === NavPaths.CreatePost)}
          >
            Create Post
          </Link>
        </li>
      </ul>
    </nav>
  )
}
