import { Switch } from '@/components/ui-elements/Switch'
import * as React from 'react'

type Props = {
  title: string
} & Omit<React.ComponentPropsWithRef<typeof Switch>, 'id'>

export const SwitchWithLabel = React.forwardRef<HTMLInputElement, Props>(
  function SwitchWithLabel({ title, ...props }, ref) {
    const id = React.useId()
    return (
      <div className="flex gap-2 items-center">
        <label htmlFor={id}>{title}</label>
        <Switch id={id} ref={ref} {...props} />
      </div>
    )
  },
)
