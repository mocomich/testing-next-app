import * as React from 'react'
import { combineStyles } from '@/libs/utils/style'

type Props = React.ComponentPropsWithoutRef<'p'>

// https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
// role="alert"としているが、スクリーンリーダーへの出力はしたくないので、aria-live="off"としている
export const ErrorMessage = React.forwardRef<HTMLParagraphElement, Props>(
  function ErrorMessage({ className, ...props }, ref) {
    return (
      <p
        {...props}
        ref={ref}
        role="alert"
        aria-live="off"
        className={combineStyles('text-sm text-error', className)}
      />
    )
  },
)
