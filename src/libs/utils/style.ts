import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function combineStyles(...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}
