import { getPagination, getPaginationSrc } from '@/libs/utils/pagination'
import { handlePrismaError, prisma } from '..'

const getOrderBy = (orderBy?: string) => {
  switch (orderBy) {
    case 'likeCount':
      return { likes: { _count: 'desc' } } as const
    default:
      return { updatedAt: 'desc' } as const
  }
}

export async function getPosts({
  page,
  orderBy,
}: {
  page?: number
  orderBy?: string
}) {
  try {
    const published = true
    const { take, skip, currentPage } = getPaginationSrc({ page })
    const [postCount, data] = await Promise.all([
      prisma.post.count({ where: { published } }),
      prisma.post.findMany({
        skip,
        take,
        where: { published },
        include: { likes: true, author: true },
        orderBy: getOrderBy(orderBy),
      }),
    ])
    return {
      posts: data.map(({ createdAt, updatedAt, likes, author, ...data }) => ({
        ...data,
        likeCount: likes.length,
        authorName: author.name,
      })),
      ...getPagination({
        take,
        skip,
        currentPage,
        postCount,
      }),
    }
  } catch (err) {
    handlePrismaError(err)
  }
}

export type GetPostsReturn = Awaited<ReturnType<typeof getPosts>>
