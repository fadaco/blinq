'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { ApartmentProps, CURRENY_SIGN, categories } from '@/lib/constant'
import { Button } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, adjustCart} from '@/state/cart/cartSlice';
import { RootState } from '@/state/store';
import { message, Image, Rate, Spin, Empty } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { fetchProductById } from '@/state/products/productsSlice';
import { saveToStorage } from '@/lib/method';


type Props = {}

const Product = (props: Props) => {
  const cart = useSelector((state: RootState) => state.cart.cart)
  const {product, loading} = useSelector((state: RootState) => state.products)

  const params = useParams()
  const dispatch = useDispatch()

  const handleAddToCart =  (apartment: ApartmentProps) => {
    const checkCart =  cart.filter(item => item.productId === apartment.id)
    if (checkCart.length) {
      dispatch(adjustCart({productId: apartment.id, type: 'increment'}))
    } else {
      dispatch(addToCart({
        productId: apartment.id,
        name: apartment.name,
        price: apartment.price,
        image: apartment.images[0],
        quantity: 1
      }))
    } 
      message.success({
        content: apartment.name + ' added to cart'
      })
  }
  
  useEffect(() => {
    saveToStorage(cart)
  }, [cart, cart.length])
  
  useEffect(() => {
    if (params) {
      dispatch(fetchProductById(params.id))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])
  return (
    <div>
      {loading ?
        <div className="flex justify-center mt-52 h-screen">
        <Spin indicator={
          <LoadingOutlined style={{ fontSize: 100 }} spin />
        } />
        </div> : 
      product ? 
        <div className='flex flex-wrap justify-between lg:flex-nowrap lg:w-3/5 w-3/4 mx-auto my-10'>
            <Image.PreviewGroup items={product.images}>
              <Image width={500} src={product.images[0]} alt={product.name} />
            </Image.PreviewGroup>
        <div>
            <h1 className='text-2xl font-semibold text-rose-500'>{product.name}</h1>
            <p className='text-sm'>{categories.filter(category => category.id === product.category)[0]?.name}</p>
            <p className='text-sm'>Hosted by {product.owner}</p>
            <div className='text-sm my-3'>
              <Rate allowHalf disabled className='text-rose-500' defaultValue={product.ratings} />
            </div>
            <p className='text-sm'>{product.date}</p>
            <div className='flex items-end mt-3 mb-10'>
              <p className='text-3xl'>{CURRENY_SIGN}{product.price}</p>/<p className='text-sm'>{product.type}</p>
            </div>
            <Button type="primary" size='large' className='bg-rose-500 hover:bg-rose-500' onClick={() => handleAddToCart(product)}>Add to Cart</Button>
          </div>
        </div> : <div className='w-screen h-screen flex justify-center pt-48'>
        <Empty description='No apartment with this id found' /></div>}
    </div>
  )
}

export default Product