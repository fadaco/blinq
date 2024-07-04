import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    url: string
    name: string
    href: string
}

const Places = ({url, name, href}: Props) => {
  return (
      <Link href={href} className='flex items-center justify-center flex-col mr-8 group cursor-pointer transition-all'>
          <Image src={url} alt={name} width={25} height={25} />
          <p className='capitalize whitespace-nowrap text-xs font-light mt-1 pb-2 group-hover:border-b-2  transition-all group-hover:border-gray-300'>{name}</p>
     </Link>
  )
}

export default Places