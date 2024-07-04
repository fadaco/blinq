'use client'
import Products from '@/components/products'
import { categories } from '@/lib/constant'
import { fetchProductsByCategoryId } from '@/state/products/productsSlice'
import { AppDispatch, RootState } from '@/state/store'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Empty } from 'antd';


type Props = {}

const ProductsPage = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const params = useParams()
  const {products, loading} = useSelector((state: RootState) => state.products)

  useEffect(() => {
    if (params.categoryId) {
      dispatch(fetchProductsByCategoryId(params.categoryId))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.categoryId])
  
  return (
    <div className="grid grid-cols-4">
    {products.length ? products.map((apartment) => (
      <Products
        categoriesPage
        key={apartment.id}
        images={apartment.images}
        ratings={apartment.ratings}
        name={apartment.name}
        price={apartment.price}
        owner={apartment.owner}
        category={categories.filter(category => category.id === apartment.category)[0]?.name}
        type={apartment.type}
        date={apartment.date}
        href={`/product/${apartment.name.replaceAll(' ', '-').toLowerCase()}/${apartment.id}`}
      />
    )) : <div className='w-screen h-screen flex justify-center pt-48'>
        <Empty description='No product in this category' /></div>
      }
  </div>
  )
}

export default ProductsPage