import NextImage, { ImageProps } from 'next/image'
import { combineStyles } from '@/libs/utils/style'
import * as React from 'react'

export const Image = ({ className, ...props }: ImageProps) => {
  return (
    <NextImage
      fill
      className={combineStyles('!relative w-auto object-cover', className)}
      {...props}
    />
  )
}
