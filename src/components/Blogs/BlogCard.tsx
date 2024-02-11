import Link from 'next/link'
import Image from 'next/image'
import type { BlogsAttributes } from 'types/ApiTypes'
import { useFunctions } from 'hooks/utils'

const BlogCard = ({ blog }: { blog: BlogsAttributes }) => {
  const blogPage = `/blog/${blog.id}`
  const { getImgInfo } = useFunctions()
  const image = getImgInfo(blog.attributes.img)
  const imageStyle = {
    width: '100%',
    height: '200px',
  }
  const maxLength = 30
  let truncateBlogDes = blog.attributes.description[0].children[0].text

  if (truncateBlogDes.length > maxLength) {
    const lastSpaceIndex = truncateBlogDes.lastIndexOf(' ', maxLength)
    if (lastSpaceIndex !== -1) {
      truncateBlogDes = truncateBlogDes.substring(0, lastSpaceIndex)
    }
  }

  const title = blog.attributes.title

  return (
    <div className='rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer'>
      <Link className='w-full flex justify-center' href={blogPage}>
        <Image
          src={image.imgUrl}
          alt={image.alternativeText ? image.alternativeText : 'logo'}
          className='rounded-t-lg'
          width={500}
          height={500}
          style={imageStyle}
          priority
        />
      </Link>
      <div className='p-2'>
        <h3 className='mt-2 overflow-ellipsis'>{title}</h3>
        <p>{truncateBlogDes}...</p>
      </div>
    </div>
  )
}
export default BlogCard
