import * as React from 'react'
import { VariantProps } from 'class-variance-authority'
import { buttonVariants } from '../Button'
import { Link } from '../Link'
import { combineStyles } from '@/libs/utils'

export type AnchorButtonProps = React.ComponentPropsWithRef<typeof Link> &
  Omit<VariantProps<typeof buttonVariants>, 'isLoading'>

export const AnchorButton = React.forwardRef<
  HTMLAnchorElement,
  AnchorButtonProps
>(function AnchorButtonBase(
  { children, className, variant, size, ...props },
  ref,
) {
  return (
    <Link
      ref={ref}
      className={combineStyles(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Link>
  )
})
