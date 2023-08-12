import * as React from 'react'
import Like from './assets/like.svg'
import { combineStyles } from '@/libs/utils/style'

type Props = {
  likeCount: number
} & React.ComponentPropsWithRef<'button'>

export const LikeButton = ({ likeCount, className, ...props }: Props) => {
  return (
    <div className="flex items-center gap-1">
      <button
        className={combineStyles('p-1.5 rounded-full bg-gray-300', className)}
        {...props}
      >
        <Like
          fontWeight={'bold'}
          className="w-5 h-5 fill-white stroke-black duration-300 hover:fill-red-500"
        />
      </button>
      <p>{likeCount}</p>
    </div>
  )
}
