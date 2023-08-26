import * as React from 'react'
import { DescriptionMessage } from '@/components/ui-elements/DescriptionMessage'
import { ErrorMessage } from '@/components/ui-elements/ErrorMessage'
import { Input } from '@/components/ui-elements/Input'
import { combineStyles } from '@/libs/utils/style'

type Props = React.ComponentPropsWithoutRef<typeof Input> & {
  title: string
  info?: React.ReactNode
  description?: string
  error?: string
}

export const InputWithInfo = React.forwardRef<HTMLInputElement, Props>(
  function TextboxWithInfo(
    { title, info, description, error, className, children, ...props },
    ref,
  ) {
    const componentId = React.useId()
    const textboxId = `${componentId}-textbox`
    const descriptionId = `${componentId}-description`
    const errorMessageId = `${componentId}-errorMessage`

    return (
      <section className={combineStyles(className)}>
        <header className="flex justify-between">
          <label htmlFor={textboxId}>{title}</label>
          {info}
        </header>
        <Input
          className="mt-1"
          id={textboxId}
          ref={ref}
          aria-invalid={!!error}
          aria-errormessage={error ? errorMessageId : undefined}
          aria-describedby={description ? descriptionId : undefined}
          {...props}
        />
        {(error || description) && (
          <footer className="grid gap-1 mt-1 justify-end">
            {description && (
              <DescriptionMessage id={descriptionId}>
                {description}
              </DescriptionMessage>
            )}
            {error && <ErrorMessage id={errorMessageId}>{error}</ErrorMessage>}
          </footer>
        )}
      </section>
    )
  },
)
