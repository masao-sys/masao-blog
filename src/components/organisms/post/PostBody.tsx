import React from 'react'
import styles from './PostBody.module.scss'
import { Post } from 'types'

type Props = {
  post: Post
}

const ArticleBody: React.FC<Props> = ({ post }) => {
  return (
    <div className="mt-10 md:m-12">
      <div className="flex space-x-1.5">
        <span className="px-2.5 py-1 bg-teal-500 text-white text-lg rounded-lg">
          {post.category.name}
        </span>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: `${post.content}`,
        }}
        className={styles.postBody}
      />
    </div>
  )
}

export default ArticleBody
