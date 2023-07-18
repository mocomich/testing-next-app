import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { combineStyles } from '@/libs/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-text hover:bg-primary/80',
        secondary: 'bg-secondary text-secondary-text hover:bg-secondary/80',
        tertiary: 'bg-tertiary text-tertiary-text hover:bg-tertiary/80',
        error: 'bg-error text-error-text hover:bg-error/80',
        outline: 'border border-border bg-background hover:opacity-80',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonProps = React.ComponentPropsWithRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    as?: React.ElementType
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ as, className, variant, size, ...props }, ref) => {
    const Component = as ? as : 'button'
    return (
      <Component
        className={combineStyles(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
