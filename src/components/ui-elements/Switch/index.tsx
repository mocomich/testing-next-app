import * as React from 'react'

type Props = Omit<React.ComponentPropsWithRef<'input'>, 'id'> & { id: string }

export const Switch = React.forwardRef<HTMLInputElement, Props>(
  function SwitchBase({ id, checked, ...props }: Props, ref) {
    return (
      <div className="inline-flex items-center">
        <div className="relative inline-block h-7 w-full cursor-pointer rounded-full">
          <input
            id={id}
            ref={ref}
            type="checkbox"
            className="peer absolute h-7 w-[54px] cursor-pointer appearance-none rounded-full bg-gray-200 transition-colors duration-300 checked:bg-primary peer-checked:border-primary disabled:opacity-70"
            {...props}
          />
          <label
            htmlFor={id}
            className="before:content[''] absolute top-2/4 h-7 w-7 -translate-y-2/4 cursor-pointer rounded-full border border-gray-200 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 bg-white shadow-md transition-all duration-300 peer-checked:translate-x-7 peer-checked:border-primary peer-disabled:border-opacity-70 peer-disabled:hover:before:opacity-0"
          />
        </div>
      </div>
    )
  },
)
