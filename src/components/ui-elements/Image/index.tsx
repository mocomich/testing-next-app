import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { combineStyles } from '@/libs/utils/style'
import * as React from 'react'

type ImageProps = NextImageProps

export const Image = ({ className, ...props }: ImageProps) => {
  return (
    <NextImage
      fill
      {...props}
      className={combineStyles('!relative w-auto object-cover', className)}
    />
  )
}
