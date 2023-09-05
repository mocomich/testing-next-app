import { useCallback, useEffect } from 'react'
import { useTabContext } from '../context'

export const useKeyboardNavigation = (
  tabListRef: React.RefObject<HTMLDivElement>,
  TabCount: number,
) => {
  const { setActiveIndex, tabIdPrefix } = useTabContext()
  const focusTab = useCallback(
    (index: number) => {
      const tab = tabListRef.current?.querySelector(
        `[id="${tabIdPrefix}-${index}"]`,
      )
      if (tab) {
        ;(tab as HTMLElement).focus()
      }
    },
    [tabIdPrefix, tabListRef],
  )

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          setActiveIndex((prevIndex: number) => {
            if (prevIndex === 0) {
              const nextIndex = TabCount - 1
              focusTab(nextIndex)
              return nextIndex
            } else {
              const nextIndex = prevIndex - 1
              focusTab(nextIndex)
              return nextIndex
            }
          })

          break
        case 'ArrowRight':
          event.preventDefault()
          setActiveIndex((prevIndex: number) => {
            if (prevIndex === TabCount - 1) {
              const nextIndex = 0
              focusTab(nextIndex)
              return nextIndex
            } else {
              const nextIndex = prevIndex + 1
              focusTab(nextIndex)
              return nextIndex
            }
          })
          break
        default:
          break
      }
    },
    [TabCount, focusTab, setActiveIndex],
  )
  useEffect(() => {
    const tabList = tabListRef.current
    tabList?.addEventListener('keydown', handleKeyDown)

    return () => {
      tabList?.removeEventListener('keydown', handleKeyDown)
    }
  }, [tabListRef, handleKeyDown])
}
