import Image from 'next/image'
import React from 'react'

type Props = {
    url: string
    name: string
    onClick: () => void
}

const Places = ({url, name, onClick}: Props) => {
  return (
      <div onClick={onClick} className='flex items-center justify-center flex-col mr-8 group cursor-pointer transition-all'>
          <Image src={url} alt={name} width={25} height={25} />
          <p className='capitalize whitespace-nowrap text-xs font-light mt-1 pb-2 group-hover:border-b-2  transition-all group-hover:border-gray-300'>{name}</p>
     </div>
  )
}

export default Places