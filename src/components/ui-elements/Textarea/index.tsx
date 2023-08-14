import * as React from 'react'

import { combineStyles } from '@/libs/utils/style'

export type Props = React.ComponentPropsWithRef<'textarea'>

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  function TextareaBase({ className, ...props }, ref) {
    return (
      <textarea
        className={combineStyles(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
