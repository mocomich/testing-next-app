import { useContext } from 'react'
import { ToastActionContext, ToastStateContext } from './ToastContext'

export const useToastState = () => {
  return useContext(ToastStateContext)
}

export const useToastAction = () => {
  return useContext(ToastActionContext)
}
