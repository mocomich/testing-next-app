import { createContext, useContext } from 'react'

type TabContextType = {
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  titleId: string
  tabIdPrefix: string
  panelIdPrefix: string
}

export const TabContext = createContext<TabContextType | null>(null)

export const useTabContext = () => {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error('TabContext must be used within a TabProvider')
  }
  return context
}
