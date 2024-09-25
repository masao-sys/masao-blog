import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { client } from '../../libs/client'
import { Post, PostsListResponse } from 'types'

type Props = {
  post: Post
}

const PostShow: NextPage<Props> = ({ post }: Props) => {
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.publishedAt}</p>
      <p>{post.category.name}</p>
      <Image
        src={post.eyecatch.url}
        alt={post.title}
        width={post.eyecatch.width}
        height={post.eyecatch.height}
      />
      <div>{post.content}</div>
    </main>
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
