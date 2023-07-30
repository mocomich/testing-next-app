import * as React from 'react'
import { DayPicker } from 'react-day-picker'
import { combineStyles } from '@/libs/utils'
import { buttonVariants } from '@/components/ui-elements/Button'
import Left from './assets/left.svg'
import Right from './assets/right.svg'
import ja from 'date-fns/locale/ja'

export type CalendarProps = React.ComponentPropsWithoutRef<typeof DayPicker>

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={combineStyles('p-3', className)}
      locale={ja}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: combineStyles(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-red-500 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: combineStyles(
          buttonVariants({ variant: 'outline' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
        ),
        day_selected:
          'bg-red-100 text-primary-text hover:bg-red-200 hover:text-primary-text focus:bg-primary focus:text-primary-text',
        day_today: 'bg-primary-container',
        day_outside: 'opacity-50',
        day_disabled: 'opacity-50',
        day_range_middle: 'aria-selected:bg-error aria-selected:text-error',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <Left className="h-4 w-4" />,
        IconRight: ({ ...props }) => <Right className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
