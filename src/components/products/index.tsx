import React from 'react'
import CarouselSlide from '../carousel';
import clsx from 'clsx';
import { Rate } from "antd";
import { CURRENY_SIGN } from '@/lib/constant';
import Link from 'next/link';

type Props = {
    images: string[]
    name: string
    ratings: number
    owner: string
    date: string
    price: string
    type: string
    category: string
    href: string
    categoriesPage?: boolean
}


const Products = ({ href ,images, name, ratings, owner, date, price, type, category, categoriesPage }: Props) => {
    return (
        <Link href={href} className={clsx(categoriesPage ? 'w-full md:w-[75%] mx-auto mb-10 relative cursor-pointer' : 'w-full md:w-[45%] lg:w-[23%] mx-auto mb-10 relative cursor-pointer')}>
         <CarouselSlide images={images} name={name} />
          <div className='flex justify-between text-sm mt-2'>
              <p className='font-semibold tracking-wide text-rose-500 capitalize'>{name}</p>
                    <div className='flex items-center'>
                    <Rate allowHalf disabled className='text-rose-500 text-sm' defaultValue={ratings} />
              </div>
          </div>
          <p className='text-gray-400 text-sm'>
              Hosted by {owner}
          </p>
          <p className='text-gray-400 text-sm'>
              {date}
          </p>
          <div className='flex justify-between mt-1'>
              <p className='font-medium text-sm'>
                    {CURRENY_SIGN}{price}/{type}
              </p>
              <h4 className='text-xs capitalize'>
                  {category}
              </h4>
              </div>
      </Link>
  )
}

export default Products