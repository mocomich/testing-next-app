import React from 'react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { combineStyles } from '@/libs/utils'

type ImageProps = NextImageProps & Pick<React.ComponentProps<'img'>, 'alt'>

export const Image = ({ className, ...props }: ImageProps) => {
  return (
    <NextImage
      fill
      {...props}
      className={combineStyles('!relative w-auto object-cover', className)}
    />
  )
}
