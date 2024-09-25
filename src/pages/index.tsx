import { GetStaticProps } from 'next'
import Link from 'next/link'
import { client } from 'libs/client'
import { PostsListResponse } from 'types'

type Props = {
  postsResponse: PostsListResponse
}

const Home = ({ postsResponse }: Props) => {
  return (
    <div>
      <ul>
        {postsResponse.contents.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postsResponse: PostsListResponse = await client.get({
    endpoint: 'posts',
  })
  const props: Props = {
    postsResponse: postsResponse,
  }

  return {
    props: props,
  }
}

export default Home
