import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { PaginationProps } from '@/libs/utils/pagination'
import Left from './assets/left.svg'
import Right from './assets/right.svg'
import clsx from 'clsx'
import { parseAsPositiveInt } from '@/libs/utils/parse'
import { combineStyles } from '@/libs/utils/style'

function isCurrent(
  a: number,
  b: number,
): React.AnchorHTMLAttributes<HTMLAnchorElement> {
  return {
    'aria-current': (a === 0 && b === 1) || a === b ? 'page' : undefined,
  }
}

const IconLink = ({
  isShow,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & { isShow: boolean }) => {
  return (
    <li className={clsx(isShow ? '' : 'hidden')}>
      <Link
        className="flex items-center justify-center px-3 h-10 border hover:bg-tertiary  hover:fill-white"
        {...props}
      >
        {children}
      </Link>
    </li>
  )
}

export const Pagination = ({
  pathname,
  pagination,
  className,
}: {
  pathname: string
  pagination: PaginationProps
} & Pick<React.ComponentPropsWithoutRef<'nav'>, 'className'>) => {
  const router = useRouter()
  const page = parseAsPositiveInt(router.query.page) || 0
  const maxPage = pagination?.items.length || 0
  if (!pagination) {
    return null
  }

  return (
    <nav
      aria-label="ページネーション"
      className={combineStyles('flex justify-center', className)}
    >
      <ul className="inline-flex -space-x-px px-4 h-10">
        <IconLink
          isShow={page > 1}
          href={{
            pathname,
            query: { ...router.query, page: pagination.prev },
          }}
        >
          <Left className="w-4 h-4" />
        </IconLink>
        {pagination?.items.map((item, index) => (
          <li key={index}>
            {typeof item === 'number' ? (
              <Link
                className="aria-[current]:bg-tertiary aria-[current]:text-white aria-[current]:font-semibold text-base flex items-center justify-center px-4 h-10 border  hover:bg-tertiary  hover:text-white"
                href={{ pathname, query: { ...router.query, page: item } }}
                {...isCurrent(page, item)}
              >
                {item.toString()}
              </Link>
            ) : (
              <span className="px-4 h-10 border flex items-center justify-center">
                {item.toString()}
              </span>
            )}
          </li>
        ))}
        <IconLink
          isShow={page < maxPage}
          href={{
            pathname,
            query: { ...router.query, page: pagination.next },
          }}
        >
          <Right className="w-4 h-4" />
        </IconLink>
      </ul>
    </nav>
  )
}
