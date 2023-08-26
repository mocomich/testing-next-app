import { render, screen } from '@testing-library/react'

import { InputWithInfo } from '.'

test('InputWithInfo', () => {
  const args = {
    title: '記事タイトル',
    description: '半角英数64文字以内で入力してください',
    error: '不正な文字が含まれています',
  }
  render(<InputWithInfo {...args} />)
  const textbox = screen.getByRole('textbox')
  expect(textbox).toHaveAccessibleName(args.title)
  expect(textbox).toHaveAccessibleDescription(args.description)
  expect(textbox).toHaveAccessibleErrorMessage(args.error)
})
