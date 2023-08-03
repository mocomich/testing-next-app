import * as React from 'react'
import { combineStyles } from '@/libs/utils'
import { VariantProps, cva } from 'class-variance-authority'
import NextLink from 'next/link'

export const linkVariants = cva(
  'text-black underline-offset-4 hover:underline disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)
type Props = React.ComponentPropsWithoutRef<typeof NextLink> &
  VariantProps<typeof linkVariants>

export const Link = React.forwardRef<HTMLAnchorElement, Props>(
  function AnchorButtonBase({ children, className, size, ...props }, ref) {
    return (
      <NextLink legacyBehavior {...props}>
        <a
          className={combineStyles(linkVariants({ size, className }))}
          ref={ref}
        >
          {children}
        </a>
      </NextLink>
    )
  },
)
