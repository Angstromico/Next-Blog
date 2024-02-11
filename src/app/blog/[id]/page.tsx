import Link from 'next/link'
import Image from 'next/image'
import FetchBlog from 'api/FetchBlog'
import { useFunctions } from 'hooks/utils'

const Page = async ({ params }: { params: { id: number } }) => {
  const { getImgInfo } = useFunctions()
  const blog = await FetchBlog(params.id)
  if (!blog) return

  const image = getImgInfo(blog.data.attributes.img)

  const { title, description, createdAt } = blog.data.attributes

  const texts = description.map((t) => {
    const ts = t.children.map((element, i) => {
      const { text } = element
      return (
        <span key={i} className='block mb-3'>
          {text}
        </span>
      )
    })
    return ts
  })

  const date = new Date(createdAt).toLocaleString()

  return (
    <div className='max-w-3xl mx-auto p-4'>
      <Link href='/'>{'< Back'}</Link>
      <div className='relative w-full h-96 overflow-hidden rounded-lg mt-5'>
        <Image
          src={image.imgUrl}
          alt={image.alternativeText ? image.alternativeText : ''}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='mt-4'>
        <h1>{title}</h1>
        <p className='mt-2'>{texts}</p>
        <div className='mt-4 flex-center'>
          <span>Published on: {date}</span>
        </div>
      </div>
    </div>
  )
}
export default Page
