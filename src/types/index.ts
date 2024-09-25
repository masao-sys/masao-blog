export type Category = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export type Eyecatch = {
  url: string
  width: number
  height: number
}

export type Post = {
  id: string
  title: string
  content: string
  category: Category
  eyecatch: Eyecatch
  createdAt: string
  updatedAt: string
  publishedAt: string
  revised_at: string
}

export type PostsListResponse = {
  contents: Post[]
  totalCount: number
  limit: number
  offset: number
}
