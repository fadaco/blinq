'use client'
import React from 'react'
import Image from 'next/image'
import SearchIcon from '@/icons/search'
import MenuIcon from '@/icons/menu'
import UserIcon from '@/icons/user'
import CartIcon from '@/icons/cart'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import { useRouter } from 'next/navigation'
import { Badge } from 'antd'

type Props = {}

const NavBar = (props: Props) => {
  const cart = useSelector((state: RootState) => state.cart.cart)
  const router = useRouter()
  return (
    <nav className="sticky px-12 top-0 side-pad w-full border-b border-gray-200 z-20 text-center h-20 flex justify-between bg-white items-center">
          <Image priority onClick={() => router.replace('/')} className='cursor-pointer' src="/logo.webp" alt="log" width={100} height={100} />
          <div className="hidden  lg:inline-flex items-center font-medium space-x-3 border border-gray-200 rounded-full px-5 py-2.5 shadow-md divide-x divide-gray-300 min-w-[330px] curp">
            <p className="mid-item-bold">Anywhere</p>
            <p className="mid-item-bold pl-2">Any week</p>
            <p className="mid-item-bold pl-2 mr-[150px]">Add guests</p>
            <div className="h-8 w-8 pry-bg items-center justify-center flex bg-rose-500 rounded-full">
              <SearchIcon />
            </div>
          </div>
          <div className="flex space-x-3 items-center">
            <div className="font-medium text-sm cursor-pointer hover:bg-gray-100 transition-colors rounded-xl px-4 py-2.5 hidden lg:inline">
              Become a host
            </div>
            <div onClick={() => router.push('/cart')} className="relative cursor-pointer hover:bg-gray-100 transition-colors rounded-full p-2 flexed lg:inline lg:text-xl">
          <Badge count={cart?.reduce((total, num) => total + num.quantity, 0)}>
          <CartIcon/>
          </Badge>
          
            </div>
            <div className="cursor-pointer rounded-[14px] flex text-xl  items-center pl-2 border border-gray-200 hover:shadow-md transition-all">
              <MenuIcon />
              <div className="px-1"/>
              <UserIcon width={"36px"} height={"36px"} />
            </div>
          </div>
        </nav>
  )
}

export default NavBar