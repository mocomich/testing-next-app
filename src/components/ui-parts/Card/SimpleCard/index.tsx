import { combineStyles } from '@/libs/utils/style'
import { ComponentPropsWithRef } from 'react'

type Props = ComponentPropsWithRef<'div'> & { title: string }

export const SimpleCard = ({ title, children, className, ...props }: Props) => {
  return (
    <div
      className={combineStyles(
        'mx-auto rounded-lg bg-tertiary-container text-primary-text shadow',
        className,
      )}
      {...props}
    >
      <div className="p-4">
        <h3 className="text-xl font-medium text-black ">{title}</h3>
        <p className="mt-1 text-black">{children}</p>
      </div>
    </div>
  )
}
