import { combineStyles } from '@/libs/utils/style'
import * as React from 'react'

export const PaginationInfo = ({
  start,
  end,
  postCount,
  className,
}: {
  start: number
  end: number
  postCount: number
} & Pick<React.ComponentPropsWithoutRef<'section'>, 'className'>) => {
  return (
    <section
      aria-label="現在表示中の一覧概要"
      className={combineStyles('flex gap-1 justify-center', className)}
    >
      <p className="font-semibold">{`${postCount}件中`}</p>
      <p>/</p>
      <p className="font-semibold">{`${start} 〜 ${end}`}</p>
    </section>
  )
}
