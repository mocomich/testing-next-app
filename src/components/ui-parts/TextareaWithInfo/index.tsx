import { DescriptionMessage } from '@/components/ui-elements/DescriptionMessage'
import { ErrorMessage } from '@/components/ui-elements/ErrorMessage'
import { Textarea } from '@/components/ui-elements/Textarea'
import { combineStyles } from '@/libs/utils/style'
import * as React from 'react'

type Props = React.ComponentPropsWithRef<typeof Textarea> & {
  title: string
  info?: React.ReactNode
  description?: string
  error?: string
}

export const TextareaWithInfo = React.forwardRef<HTMLTextAreaElement, Props>(
  function TextareaWithInfo(
    { title, info, description, error, className, ...props },
    ref,
  ) {
    const componentId = React.useId()
    const textareaId = `${componentId}-textarea`
    const descriptionId = `${componentId}-description`
    const errorMessageId = `${componentId}-errorMessage`

    return (
      <section className={combineStyles(className)}>
        <header className="flex justify-between">
          <label htmlFor={textareaId}>{title}</label>
          {info}
        </header>
        <Textarea
          {...props}
          className="mt-1"
          ref={ref}
          id={textareaId}
          aria-invalid={!!error}
          aria-describedby={description ? descriptionId : undefined}
          aria-errormessage={error ? errorMessageId : undefined}
        />
        {(description || error) && (
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
