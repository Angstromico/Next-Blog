'use client'
import { createContext, useState } from 'react'

const CategoryContext = createContext({
  categoryContx: '',
  chooseCategory: (cat: string) => {},
})
export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [categoryContx, setCategory] = useState<string>('')
  const chooseCategory = (cat: string) => setCategory(cat)

  return (
    <CategoryContext.Provider value={{ categoryContx, chooseCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContext
