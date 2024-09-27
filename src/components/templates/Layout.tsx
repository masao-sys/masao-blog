import React from 'react'
import Footer from 'components/organisms/common/Footer'
import Header from 'components/organisms/common/Header'
import PageHead, { MetaPageType } from 'components/organisms/common/PageHead'

type Props = {
  title?: string
  pageType?: MetaPageType
  children: React.ReactNode
  canonicalUrl?: string
  pageImage?: string
}

const Layout: React.FC<Props> = ({
  title,
  pageType,
  children,
  canonicalUrl,
  pageImage,
}) => {
  return (
    <>
      <PageHead
        pageTitle={title}
        pageType={pageType}
        canonicalUrl={canonicalUrl}
        pageImage={pageImage}
      />
      <div className="bg-white lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <Header />
            {children}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
