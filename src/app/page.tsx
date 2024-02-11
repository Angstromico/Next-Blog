import Categories from 'c/Categories'
import Blogs from 'c/Blogs'
import FetchCategories from 'api/FetchCategories'
import FetchBlogs from 'api/FetchBlogs'

export default async function Home() {
  const categories = await FetchCategories()
  const blogs = await FetchBlogs()

  return (
    <main className='flex min-h-screen flex-wrap items-center justify-between p-24 w-full mx-auto'>
      <Categories categories={categories} />
      <Blogs blogs={blogs} />
    </main>
  )
}
