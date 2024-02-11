'use client'
import { useContext } from 'react'
import CategoryContext from 'context/CategoryContext'
import type { StrapiBlogs } from 'types/ApiTypes'
import BlogCard from './BlogCard'

const Blogs = ({ blogs }: { blogs?: StrapiBlogs }) => {
  const { categoryContx } = useContext(CategoryContext)
  if (!blogs) return null
  const filteredBlogs = blogs.data.filter((blog) => {
    return blog.attributes.categories.data.some(
      (cat) => cat.attributes.title === categoryContx
    )
  })

  const handleBlogs = () => {
    const categories: JSX.Element[] = []
    const blogLength = !categoryContx ? blogs.data.length : filteredBlogs.length
    for (let i = 0; i < blogLength; i++) {
      const blogId = categoryContx ? filteredBlogs[i].id : blogs.data[i].id
      const blog = categoryContx ? filteredBlogs[i] : blogs.data[i]

      const element = (
        <div key={blogId}>
          <BlogCard blog={blog} />
        </div>
      )
      categories.push(element)
    }
    return categories
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {handleBlogs()}
    </div>
  )
}
export default Blogs
