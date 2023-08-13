import { GetServerSideProps } from 'next'
import { Error } from '@/components/err'
import { Posts } from '@/components/features/posts/components/Posts'
import { BasicLayout } from '@/components/layouts/BasicLayout'
import { PageTitle } from '@/components/meta'
import { HttpError } from '@/libs/error'
import { NextPageWithSsrResult } from '@/libs/next/types'
import { GetPostsReturn, getPosts } from '@/services/server/Posts'
import { parseAsNotEmptyString, parseAsPositiveInt } from '@/libs/utils/parse'

type Props = GetPostsReturn

const Page: NextPageWithSsrResult<Props> = ({ data, err }) => {
  return err ? <Error {...err} /> : <Posts {...data} />
}
Page.getLayout = BasicLayout
Page.getPageTitle = PageTitle(() => 'My App')

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx
  try {
    const data = await getPosts({
      page: parseAsPositiveInt(query.page),
      orderBy: parseAsNotEmptyString(query.orderBy),
    })
    return { props: { data: data, err: null } }
  } catch (err) {
    if (err instanceof HttpError) {
      return { props: { data: null, err: err.serialize() } }
    }
    throw err
  }
}

export default Page
