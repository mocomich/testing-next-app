import { Like } from '@prisma/client'

type LikeData = Omit<Like, 'id' | 'createdAt'>

export const likesFixture = (): LikeData[] => {
  return [
    {
      userId: 1,
      postId: 1,
      authorId: 2,
    },
  ]
}
