import Image from 'next/image'
import React from 'react'
import DateText from '../../atomics/DateText'
import { Category } from 'types'

type Props = {
  title: string
  imageUrl: string
  category: Category
  publishedAt: string
  revisedAt?: string
}

const PostHeader: React.FC<Props> = ({
  title,
  imageUrl,
  publishedAt,
  revisedAt,
}) => {
  return (
    <div className="relative flex justify-center">
      <div className="relative h-60 w-full justify-center opacity-25">
        <Image src={imageUrl} layout="fill" objectFit="cover" alt="" />
      </div>
      <div className="absolute flex h-full w-full items-center p-8">
        <div className="w-full text-center">
          <div className="mt-8">
            <h1 className="text-xl font-semibold sm:text-3xl">{title}</h1>
          </div>

          <div className="mt-4 flex justify-end mr-12 space-x-4">
            <DateText date={publishedAt} type="publishedAt" />
            {revisedAt && <DateText date={revisedAt} type="revisedAt" />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostHeader
