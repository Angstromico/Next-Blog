interface BlogCategories {
  data: {
    attributes: {
      title: string
    }
  }[]
}
export interface CategorieAttributes {
  id: number
  attributes: {
    title: string
  }
}

export interface ImageStrapi {
  data: {
    attributes: {
      url: string
      alternativeText?: string
    }
  }
}
export interface BlogsAttributes {
  id: number
  attributes: {
    title: string
    createdAt: string
    img: ImageStrapi
    description: { children: { text: string }[] }[]
    categories: BlogCategories
  }
}

export interface StrapiCategories {
  data: CategorieAttributes[]
}

export interface StrapiBlogs {
  data: BlogsAttributes[]
}

export interface StrapiBlog {
  data: BlogsAttributes
}
