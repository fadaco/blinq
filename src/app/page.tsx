'use client'
import { categories } from "@/lib/constant";
import Products from "@/components/products";
import StickyButton from "@/components/sticky-button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { fetchProducts } from "@/state/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/state/store";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from "antd";

export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const {products, loading} = useSelector((state: RootState) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {loading ?
        <div className="flex justify-center mt-52 h-screen">
        <Spin indicator={
          <LoadingOutlined style={{ fontSize: 100 }} spin />
        } />
        </div>
       
        :  
        <div className="">
        <div className="w-full min-h-screen flex items-center px-4 lg:px-[44px] flex-wrap py-6 mt-3">
          {products.length ? products.map((apartment) => (
            <Products
              key={apartment.id}
              images={apartment.images}
              ratings={apartment.ratings}
              name={apartment.name}
              price={apartment.price}
              owner={apartment.owner}
              category={categories.filter(category => category.id === apartment.category)[0]?.name}
              type={apartment.type}
              date={apartment.date}
              onClick={() => router.push(`/product/${apartment.name.replaceAll(' ', '-').toLowerCase()}/${apartment.id}`)}
            />
          )) : <div/>}
        </div>
       <StickyButton />
    </div>
    }
      
  </div>
  )
}
