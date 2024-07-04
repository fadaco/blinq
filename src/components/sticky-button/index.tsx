import MapIcon from '@/icons/map'
import React from 'react'

type Props = {}

const StickyButton = (props: Props) => {
  return (
    <div className="hidden lg:flex justify-center sticky bottom-24 h-full z-20">
    <button className="rounded-3xl bg-rose-500 mx-auto l active:scale-90 transition-all px-5 py-2.5 text-white text-sm flex items-center hover:scale-105 hover:shadow-xl">
      <span>Show map</span>
      <MapIcon />
    </button>
  </div>
  )
}

export default StickyButton