'use client'
import { useContext } from 'react'
import type { CategorieAttributes } from '@/types/ApiTypes'
import CategoryContext from 'context/CategoryContext'

const Category = ({ category }: { category: CategorieAttributes | string }) => {
  const title =
    typeof category === 'string' ? category : category.attributes.title
  const { chooseCategory, categoryContx } = useContext(CategoryContext)

  return (
    <div
      onClick={() => chooseCategory(title)}
      className={`p-4 rounded-lg shadow-md cursor-pointer transition-all duration-700 ${
        categoryContx === title ? 'bg-[#FFD700]' : 'bg-[#5400FF]'
      } mt-3`}
    >
      <h2 className='text-center mb-2'>{title ? title : 'All'}</h2>
    </div>
  )
}
export default Category
