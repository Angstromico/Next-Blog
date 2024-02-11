import type { StrapiBlog } from 'types/ApiTypes'

const FetchBlog = async (id: number) => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }

  const link = `${process.env.STRAPI_API_BLOG}${id}?populate=*`

  try {
    const rest = await fetch(
      link ? link : 'http://127.0.0.1:1337/api/blogs/1?populate=*',
      options
    )
    const response: StrapiBlog = await rest.json()
    return response
  } catch (error) {
    console.log(error)
  }
}
export default FetchBlog
