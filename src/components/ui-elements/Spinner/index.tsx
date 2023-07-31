import { combineStyles } from '@/libs/utils'
import { VariantProps, cva } from 'class-variance-authority'

const spinnerVariants = cva(' animate-spin rounded-full border-t-transparent', {
  variants: {
    size: {
      sm: 'h-4 w-4 border-[2px]',
      md: 'h-5 w-5 border-[3px]',
      lg: 'h-7 w-7 border-[4px]',
      icon: 'h-4 w-4 border-[2px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

type Props = VariantProps<typeof spinnerVariants>

export const Spinner = ({ size }: Props) => {
  return (
    <div
      role="status"
      aria-label="読み込み中"
      className="flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className={combineStyles(spinnerVariants({ size }))} />
    </div>
  )
}
