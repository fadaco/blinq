'use client'
import { RootState } from '@/state/store'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, adjustCart } from '@/state/cart/cartSlice';
import { Empty, message, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { CURRENY_SIGN } from '@/lib/constant'
import { getCartInStorage } from '@/lib/method'
import { updateCartInState } from '@/state/cart/cartSlice';


type Props = {}

const CartPage = (props: Props) => {
    const cart = useSelector((state: RootState) => state.cart.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        const cartInStorage = getCartInStorage()
        if (Array.isArray(cartInStorage) && cartInStorage.length) {
            dispatch(updateCartInState(cartInStorage))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleCheckOut = () => {
        // send the productId and quantity
    }

    return (
        <>
            {cart.length ?
                <div className='flex flex-wrap justify-between lg:w-4/5 w-4/5 mx-auto my-10'>
                    <div className='w-[100%] lg:w-[70%]'>
                        {cart.map(item => (
                            <div key={item.productId} className='flex flex-wrap justify-between items-center bg-gray-100 rounded-lg mb-2 pr-1'>
                                <div className='flex items-center flex-wrap'>
                                    <Image className='rounded-tl rounded-bl' src={item.image} alt={item.name} width={300} height={200} />
                                    <div className='text-lg ml-5 mr-10 text-rose-500 mb-4 lg:mb-0'>
                                        {item.name}
                                    </div>
                                </div>
                                <div className='text-lg mb-4 lg:mb-0'>{CURRENY_SIGN}{item.price}</div>
                                <div className='mx-5 mb-4 lg:mb-0'>
                                    <Button onClick={() => dispatch(adjustCart({ productId: item.productId, type: 'decrement' }))}>-</Button>
                                    <span className='mx-2'>{item.quantity}</span>
                                    <Button onClick={() => dispatch(adjustCart({ productId: item.productId, type: 'increment' }))}>+</Button>
                                </div>
                                <div className='text-lg mb-4 lg:mb-0'>{CURRENY_SIGN}{parseFloat(item.price) * item.quantity}</div>
                                <DeleteOutlined onClick={() => {
                                    dispatch(removeFromCart(item.productId))
                                    message.success({
                                        content: item.name + ' has been remove from cart'
                                      })
                                }} className='mr-4 mb-4 lg:mb-0' />
                            </div>
                        ))}
                    </div>
                    <div className='bg-gray-100 w-[100%] lg:w-[25%] rounded-lg p-4'>
                        <p className='font-bold text-rose-500 text-center'>Cart Total</p>
                        <div className='flex justify-between items-center mt-3'>
                            <p>Cart SubTotal</p>
                            <p>{CURRENY_SIGN}{cart?.reduce((total, num) => total + (parseFloat(num.price) * num.quantity), 0) + '.00'}</p>
                        </div>
                        <div className='flex justify-between items-center my-3'>
                            <p>Discount</p>
                            <p>{CURRENY_SIGN}-4.00</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>Cart Total</p>
                            <p>{CURRENY_SIGN}{cart?.reduce((total, num) => total + ((parseFloat(num.price) * num.quantity) - 4), 0) + '.00'}</p>
                        </div>
                        <div className='mt-14 flex justify-end'>
                            <Button onClick={handleCheckOut} size='large' className='bg-rose-500 text-white'>Proceed to Checkout</Button>
                        </div>
                    </div>
                </div>
                 : <div className='w-screen h-screen flex justify-center pt-48'>
        <Empty description='Empty Cart' /></div>}
            </>
  )
}

export default CartPage