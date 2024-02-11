import type { StrapiCategories } from '@/types/ApiTypes'
import Category from '../Category.tsx'
const Categories = ({ categories }: { categories?: StrapiCategories }) => {
  const handleCategories = () => {
    const info = categories?.data?.map((category) => {
      const { id } = category

      return (
        <div key={id}>
          <Category category={category} />
        </div>
      )
    })

    return info
  }

  return (
    <div className='gap-8 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full items-center justify-center'>
      {handleCategories()}
      <div>
        <Category category='' />
      </div>
    </div>
  )
}
export default Categories
