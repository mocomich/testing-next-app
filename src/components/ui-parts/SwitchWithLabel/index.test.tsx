import { render, screen } from '@testing-library/react'

import { SwitchWithLabel } from '.'

test('SwitchWithLabel', () => {
  const args = {
    title: '公開ステータス',
  }
  render(<SwitchWithLabel {...args} />)
  expect(screen.getByRole('checkbox')).toHaveAccessibleName(args.title)
})
