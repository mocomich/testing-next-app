import { render, screen } from '@testing-library/react'
import { getPostsData } from '@/services/server/Posts/__mocks__/fixtures'
import userEvent from '@testing-library/user-event'
import mockRouter from 'next-router-mock'
import { PostItem } from '.'

const user = userEvent.setup()
const post = getPostsData.posts[0]

test('リンクのアクセシブルネームはタイトルを参照する', () => {
  render(<PostItem post={post} />)
  // <a>要素に aria-label を設定しない場合、内包テキスト全文がアクセシブルネームになってしまう
  expect(screen.getByRole('link')).toHaveAccessibleName(post.title)
})

test('リンクを押すと、詳細画面に遷移する', async () => {
  render(<PostItem post={post} />)
  await user.click(screen.getByRole('link'))
  expect(mockRouter).toMatchObject({ pathname: `/posts/${post.id}` })
})
