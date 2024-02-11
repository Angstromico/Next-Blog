import { type StrapiBlogs } from '@/types/ApiTypes'
const FetchBlogs = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }

  try {
    const rest = await fetch(
      process.env.STRAPI_API_BLOGS
        ? process.env.STRAPI_API_BLOGS
        : 'http://127.0.0.1:1337/api/blogs?populate=*',
      options
    )
    const response: StrapiBlogs = await rest.json()
    return response
  } catch (error) {
    console.log(error)
  }
}

export default FetchBlogs
