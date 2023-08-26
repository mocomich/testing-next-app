import { render, screen } from '@testing-library/react'

import { TextareaWithInfo } from '.'

test('TextareaWithInfo', () => {
  const args = {
    title: '記事タイトル',
    description: '半角英数64文字以内で入力してください',
    error: '不正な文字が含まれています',
  }
  render(<TextareaWithInfo {...args} />)
  const textarea = screen.getByRole('textbox')
  expect(textarea).toHaveAccessibleName(args.title)
  expect(textarea).toHaveAccessibleDescription(args.description)
  expect(textarea).toHaveAccessibleErrorMessage(args.error)
})
