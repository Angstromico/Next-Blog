import type { ImageStrapi } from 'types/ApiTypes'
export const useFunctions = () => {
  const generateImgSrc = (url: string) => 'http://127.0.0.1:1337' + url

  const getImgInfo = (img: ImageStrapi) => {
    const { url, alternativeText } = img.data.attributes
    const imgUrl = generateImgSrc(url)
    if (alternativeText) return { imgUrl, alternativeText }
    return { imgUrl }
  }

  return { getImgInfo }
}
