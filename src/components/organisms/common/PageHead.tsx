import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

type MetaData = {
  pageTitle?: string
  pageDescription?: string
  pageType?: MetaPageType
  pageImage?: string
  pageImageWidth?: number
  pageImageHeight?: number
  canonicalUrl?: string
}

export type MetaPageType = 'blog' | 'article'

const PageHead: React.FC<MetaData> = ({
  pageTitle,
  pageDescription,
  pageType,
  pageImage,
  pageImageWidth,
  pageImageHeight,
  canonicalUrl,
}) => {
  const defaultPageDescription = `エンジニアのブログです。技術的なことや日常のことについて書いています。`

  const title = pageTitle ? pageTitle : 'Masao BLOG'
  const description = pageDescription || defaultPageDescription
  const type = pageType || 'blog'
  const image = pageImage || '/images/og_image.png'
  const imageWidth = pageImageWidth || 1200
  const imageHeight = pageImageHeight || 630
  const canonical = canonicalUrl || 'https://example.com'

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <Link rel="canonical" href={canonical} />
    </Head>
  )
}

export default PageHead
