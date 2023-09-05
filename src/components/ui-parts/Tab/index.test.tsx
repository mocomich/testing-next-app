import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Tab from '.'

const user = userEvent.setup()

const setup = () => {
  render(
    <Tab.Group>
      <Tab.List>
        <Tab>タブ1</Tab>
        <Tab>タブ2</Tab>
      </Tab.List>
      <Tab.PanelList>
        <Tab.Panel>タブ1の内容</Tab.Panel>
        <Tab.Panel>タブ2の内容</Tab.Panel>
      </Tab.PanelList>
    </Tab.Group>,
  )
  const TabElement1 = screen.getByRole('tab', { name: 'タブ1' })
  const TabElement2 = screen.getByRole('tab', { name: 'タブ2' })

  const isSelected = (element: HTMLElement) => {
    expect(element).toHaveAttribute('aria-selected', 'true')
    expect(element).toHaveAttribute('tabIndex', '0')
  }

  const isNotSelected = (element: HTMLElement) => {
    expect(element).toHaveAttribute('aria-selected', 'false')
    expect(element).toHaveAttribute('tabIndex', '-1')
  }

  return { TabElement1, TabElement2, isSelected, isNotSelected }
}

test('初期表示時、タブ1が選択されている', () => {
  const { TabElement1, TabElement2, isSelected, isNotSelected } = setup()
  isSelected(TabElement1)
  isNotSelected(TabElement2)
})

test('タブ2をクリックすると、タブ2が選択状態に切り替わる', async () => {
  const { TabElement1, TabElement2, isSelected, isNotSelected } = setup()
  await user.click(TabElement2)
  isNotSelected(TabElement1)
  isSelected(TabElement2)
})

test('キーボード操作: ArrowRight、 ArrowLeftによりTabの選択状態が切り替わる', async () => {
  const { TabElement1, TabElement2, isSelected, isNotSelected } = setup()
  //Tab1初期表示
  isSelected(TabElement1)

  //Tab1からTab2へ切り替わる
  await user.type(TabElement1, '{arrowright}')
  isNotSelected(TabElement1)
  isSelected(TabElement2)

  //Tab2からTab1へ切り替わる
  await user.type(TabElement2, '{arrowleft}')
  isSelected(TabElement1)
  isNotSelected(TabElement2)
})
