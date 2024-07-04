import LeftIcon from '@/icons/left'
import RightIcon from '@/icons/right'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'

type Props = {
    images: string[]
    name: string
}

const CarouselSlide = ({images, name}: Props) => {
  return (
    <Carousel
      showThumbs={false}
    renderArrowNext={(clickHandler, hasNext) => hasNext &&
      <div className='absolute bg-white w-6 h-6 rounded-full top-2/4 shadow-sm flex items-center justify-center cursor-pointer right-1'
        onClick={(e) => {
          e.stopPropagation()
          clickHandler()
        }}>
            <RightIcon />
        </div>
    }
    renderArrowPrev={(clickHandler, hasNext) => hasNext &&
      <div className='absolute bg-white w-6 h-6 rounded-full left-0.5 bottom-2/4 z-10 flex items-center justify-center cursor-pointer'
        onClick={(e) => {
          e.stopPropagation()
          clickHandler()
        }}>
            <LeftIcon />
      </div>
  }
      
>
    
    {images && images.map((img, index) => (
      <div key={index}>
          <Image className='object-fill h-[230px] w-full rounded-lg ' src={img} alt={name + index} width={100} height={100} />
      </div>
    ))}
</Carousel>
  )
}

export default CarouselSlide