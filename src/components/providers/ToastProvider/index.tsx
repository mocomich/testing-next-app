import { Toast } from './Toast'
import {
  ToastActionContext,
  ToastState,
  ToastStateContext,
} from './ToastContext'
import { useToastProvider } from './useToastProvidet'

export const ToastProvider = ({
  children,
  defaultState,
}: {
  children: React.ReactNode
  defaultState?: Partial<ToastState>
}) => {
  const { isShown, message, style, showToast, hideToast } = useToastProvider()
  return (
    <ToastStateContext.Provider value={{ isShown, message, style }}>
      <ToastActionContext.Provider value={{ showToast, hideToast }}>
        {children}
        {isShown && <Toast message={message} style={style} />}
      </ToastActionContext.Provider>
    </ToastStateContext.Provider>
  )
}
