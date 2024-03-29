import { combineStyles } from '@/libs/utils/style'
import * as React from 'react'

type Props = React.ComponentPropsWithRef<'input'>

export const Input = React.forwardRef<HTMLInputElement, Props>(
  function InputBase({ className, ...props }, ref) {
    return (
      <input
        className={combineStyles(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
