import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import PostBody from '@/components/organisms/post/PostBody'
import PostHeader from '@/components/organisms/post/PostHeader'
import { client } from '@/libs/client'
import Layout from '@/components/templates/Layout'
import { Post, PostsListResponse } from 'types'

type Props = {
  post: Post
}

const PostShow: NextPage<Props> = ({ post }: Props) => {
  return (
    <Layout>
      <PostHeader
        title={post.title}
        imageUrl={post.eyecatch.url}
        category={post.category}
        publishedAt={post.publishedAt}
        revisedAt={post.revised_at}
      />
      <PostBody post={post} />
    </Layout>
  )
}

type PathParams = {
  id: string
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params?.id as string
  try {
    const post: Post = await client.get({
      endpoint: 'posts',
      contentId: id,
    })

    return {
      props: {
        post: post,
      },
    }
  } catch {
    return {
      notFound: true,
    }
  }
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const data: PostsListResponse = await client.get({
    endpoint: 'posts',
  })
  const posts = data.contents
  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    }
  })
  return { paths, fallback: 'blocking' }
}

export default PostShow
