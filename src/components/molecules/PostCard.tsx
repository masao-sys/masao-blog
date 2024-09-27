import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Post } from '../../types'

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
      <Link
        href={`/post/${post.id}`}
        className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
      >
        <Image
          src={post.eyecatch.url}
          width={post.eyecatch.width}
          height={post.eyecatch.height}
          alt={post.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          <Link
            href={`/post/${post.id}`}
            className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
          >
            {post.title}
          </Link>
        </h2>

        <div className="mt-auto flex items-end justify-between">
          <span className="rounded border px-2 py-1 text-sm text-gray-500">
            {post.category.name}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PostCard
