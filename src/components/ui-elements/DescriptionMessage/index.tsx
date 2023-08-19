import * as React from 'react'
import { combineStyles } from '@/libs/utils/style'

type Props = React.ComponentPropsWithoutRef<'p'>

export const DescriptionMessage = React.forwardRef<HTMLParagraphElement, Props>(
  function DescriptionMessage({ className, ...props }, ref) {
    return (
      <p {...props} ref={ref} className={combineStyles('text-sm', className)} />
    )
  },
)
