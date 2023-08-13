import { LikeButton } from '@/components/ui-elements/LikeButton'
import { WithPhotoCard } from '@/components/ui-parts/Card/WithPhotoCard'
import { GetPostsReturn } from '@/services/server/Posts'
import Link from 'next/link'

type Props = {
  post: GetPostsReturn['posts'][0]
}
export const PostItem = ({ post }: Props) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <WithPhotoCard
        title={post.title}
        imgProps={{ src: post.imageUrl || '', alt: '' }}
      >
        <LikeButton likeCount={post.likeCount} className="ml-auto" />
      </WithPhotoCard>
    </Link>
  )
}
