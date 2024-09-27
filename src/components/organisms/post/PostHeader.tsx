import React from "react";
import Image from "next/image";
import DateText from '../../atomics/DateText'
import { Category } from 'types'

type Props = {
  title: string;
  imageUrl: string;
  category: Category;
  publishedAt: string;
  revisedAt?: string;
};

const PostHeader: React.FC<Props> = ({
  title,
  imageUrl,
  category,
  publishedAt,
  revisedAt,
}) => {
  return (
    <div className="relative flex justify-center">
      {/* 背景画像のセクション */}
      <div className="relative h-60 w-full justify-center opacity-25">
        <Image src={imageUrl} layout="fill" objectFit="cover" alt="" />
      </div>

      {/* タイトルや日付情報を表示する絶対位置のオーバーレイ */}
      <div className="absolute flex h-full w-full items-center p-8">
        <div className="w-full text-center">
          {/* タイトル */}
          <div className="mt-8">
            <h1 className="text-xl font-semibold sm:text-3xl">
              {title}
            </h1>
          </div>

          {/* 日付情報 */}
          <div className="mt-4 flex justify-end mr-12 space-x-4">
            <DateText date={publishedAt} type="publishedAt" />
            {revisedAt && (
              <DateText date={revisedAt} type="revisedAt" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostHeader
