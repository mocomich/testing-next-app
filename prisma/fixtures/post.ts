import { Post } from '@prisma/client'
import fs from 'fs'
import { resolve } from 'path'

export type PostData = Omit<Post, 'id' | 'createdAt' | 'updatedAt'>

export const postsFixture = ({
  authorId,
}: Pick<Post, 'authorId'>): PostData[] => {
  const body = fs.readFileSync(resolve(__dirname, 'post-mock.md'), 'utf8')
  return [...new Array(30)].map((_, i) => ({
    title: `Test Title ${i * authorId}`,
    description: 'how to use in useState',
    body,
    imageUrl: '/__mocks__/images/img01.png',
    published: !!(i % 2),
    authorId,
  }))
}
