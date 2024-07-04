'use client'
import React from 'react'
import Places from '../places'
import FilterIcon from '@/icons/filter'
import { categories } from '@/lib/constant'
import { useRouter } from 'next/navigation'

const CategoriesBar = () => {
  const router = useRouter()

  return (
    <div className="px-12 flex items-center sticky top-[75px] h-24 bg-white shadow-xs z-10">
      <div className='flex items-center overflow-x-scroll nav-bar'>
        {categories.map((category) => (
            <Places onClick={() => router.push(`/categories/${category.id}`)} key={category.id} name={category.name} url={category.url} />
          ))}
          </div>
          <div className="flex items-center p-3 rounded-xl border-2 border-gray-300 ml-4 font-semibold">
            <FilterIcon />
          <p className="text-sm ml-2">Filters</p>
          </div>
        </div>
  )
}

export default CategoriesBar