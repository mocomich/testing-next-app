import React, {
  useId,
  useState,
  Children,
  useRef,
  ComponentPropsWithoutRef,
} from 'react'
import { TabContext, useTabContext } from './context'
import { useKeyboardNavigation } from './hooks'
import { combineStyles } from '@/libs/utils/style'

type GroupProps = {
  children: React.ReactNode
  activeIndex?: number
}

const Group = ({
  activeIndex: defaultActiveIndex = 0,
  children,
}: GroupProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)
  const tabId = useId()
  const titleId = `tab-title-${tabId}`
  const tabIdPrefix = `tab-${tabId}`
  const panelIdPrefix = `panel-${tabId}`

  return (
    <TabContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        titleId,
        tabIdPrefix,
        panelIdPrefix,
      }}
    >
      {children}
    </TabContext.Provider>
  )
}

const Title = ({
  children,
  ...props
}: { children: React.ReactNode } & Omit<
  ComponentPropsWithoutRef<'div'>,
  'id'
>) => {
  const { titleId } = useTabContext()

  return (
    <div id={titleId} {...props}>
      {children}
    </div>
  )
}

const List = ({
  children,
  ...props
}: { children: React.ReactNode } & Omit<
  ComponentPropsWithoutRef<'div'>,
  'id'
>) => {
  const { titleId } = useTabContext()
  const tabListRef = useRef<HTMLDivElement>(null)
  useKeyboardNavigation(tabListRef, Children.count(children))

  return (
    <div role="tablist" aria-labelledby={titleId} ref={tabListRef} {...props}>
      {Children.map(children, (child, index) => {
        return React.cloneElement(child as React.ReactElement, { index })
      })}
    </div>
  )
}

const PanelList = ({
  children,
  ...props
}: { children: React.ReactNode } & Omit<
  ComponentPropsWithoutRef<'div'>,
  'id'
>) => {
  return (
    <div {...props}>
      {Children.map(children, (child, index) => {
        return React.cloneElement(child as React.ReactElement, { index })
      })}
    </div>
  )
}

type TabProps = {
  children: React.ReactNode
  index?: number
}

const Panel = ({
  children,
  index,
  className,
  ...props
}: TabProps &
  Omit<
    ComponentPropsWithoutRef<'div'>,
    'id' | 'role' | 'aria-labelledby' | 'tabIndex'
  >) => {
  const { activeIndex, tabIdPrefix, panelIdPrefix } = useTabContext()
  if (index === undefined) {
    throw new Error('Tab must have an index prop')
  }

  return (
    <div
      role="tabpanel"
      aria-labelledby={`${tabIdPrefix}-${index}`}
      id={`${panelIdPrefix}-${index}`}
      className={combineStyles(
        className,
        index === activeIndex ? '' : 'hidden',
      )}
      tabIndex={0}
      {...props}
    >
      {children}
    </div>
  )
}

const Tab = ({
  children,
  index,
  ...props
}: TabProps &
  Omit<
    ComponentPropsWithoutRef<'button'>,
    | 'id'
    | 'role'
    | 'aria-controls'
    | 'aria-selected'
    | 'tabIndex'
    | 'onClick'
    | 'type'
  >) => {
  const { activeIndex, setActiveIndex, tabIdPrefix, panelIdPrefix } =
    useTabContext()

  if (index === undefined) {
    throw new Error('Tab must have an index prop')
  }

  return (
    <button
      role="tab"
      aria-controls={`${panelIdPrefix}-${index}`}
      aria-selected={index === activeIndex}
      id={`${tabIdPrefix}-${index}`}
      onClick={() => setActiveIndex(index)}
      tabIndex={index === activeIndex ? 0 : -1}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}

Tab.Group = Group
Tab.Title = Title
Tab.List = List
Tab.Panel = Panel
Tab.PanelList = PanelList

export default Tab
