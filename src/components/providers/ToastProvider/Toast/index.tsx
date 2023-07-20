import React, { useEffect, useState } from 'react'
import { ToastStyle } from '../ToastContext'
import Success from './assets/success.svg'
import Error from './assets/error.svg'
import { cva } from 'class-variance-authority'
import { useToastAction } from '../hooks'
import { combineStyles } from '@/libs/utils'

type Props = { message: string; style: ToastStyle }

export const Toast = ({ message, style }: Props) => {
  const [isMount, setIsMount] = useState(false)
  const { hideToast } = useToastAction()

  function useTimeoutFn(callback: () => void, delay: number): () => void {
    const timeoutId = setTimeout(callback, delay)
    return () => clearTimeout(timeoutId)
  }
  const clearToastTimeout = useTimeoutFn(() => {
    setIsMount(true)
  }, 50)

  const clearHideToastTimeout = useTimeoutFn(() => {
    hideToast()
  }, 2000)

  useEffect(() => {
    return () => {
      clearToastTimeout()
      clearHideToastTimeout()
    }
  }, [])

  const toastVariants = cva(
    'flex items-center fixed bottom-2 right-2 gap-4 p-4 rounded-md transition-all duration-500 [&>svg>path]:fill-primary-text',
    {
      variants: {
        style: {
          success: 'bg-tertiary text-primary-text',
          error: 'bg-error text-primary-text',
        },
        isMount: {
          true: 'opacity-100 translate-y-0',
          false: 'opacity-0 translate-y-[64px]',
        },
      },
      defaultVariants: {
        style: 'success',
        isMount: false,
      },
    },
  )
  return (
    <p
      role="alert"
      data-mounted={isMount}
      className={combineStyles(toastVariants({ style, isMount }))}
    >
      {style === 'success' ? <Success /> : <Error />}
      {message}
    </p>
  )
}
