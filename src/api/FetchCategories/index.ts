import { type StrapiCategories } from '@/types/ApiTypes'
const FetchCategories = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }

  try {
    const rest = await fetch(
      process.env.STRAPI_API_CATEGORIES
        ? process.env.STRAPI_API_CATEGORIES
        : 'http://127.0.0.1:1337/api/categories',
      options
    )
    const response: StrapiCategories = await rest.json()
    return response
  } catch (error) {
    console.log(error)
  }
}

export default FetchCategories
