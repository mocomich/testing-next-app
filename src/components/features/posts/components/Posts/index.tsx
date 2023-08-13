import { GetPostsReturn } from '@/services/server/Posts'
import { PostItem } from './PostItem'
import { Header } from './Header'
import { Pagination } from '@/components/ui-parts/Pagination'
import { PaginationInfo } from '@/components/ui-parts/PaginationInfo'

const PostList = ({ posts }: { posts: GetPostsReturn['posts'] }) => {
  return (
    <section aria-label="記事一覧" className="mt-10">
      <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <li key={post.id}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </section>
  )
}
export const Posts = ({
  posts,
  pagination,
  paginationInfo,
}: GetPostsReturn) => {
  return (
    <section aria-label="投稿一覧" className="py-8">
      <Header />
      <PostList posts={posts} />
      <Pagination pagination={pagination} pathname="/" className="mt-8" />
      <PaginationInfo {...paginationInfo} className="mt-3" />
    </section>
  )
}
