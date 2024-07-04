import GlobeIcon from '@/icons/globe'
import { CURRENY_SIGN } from '@/lib/constant'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="w-full px-12 fixed bottom-0 bg-gray-100 min-h-12 py-4 flex items-center z-20">
    <div className="w-full hidden lg:inline-flex items-center justify-between">
      <div className="text-sm flex items-center font-light">
        &#169;
        <p>2024 Airbnb, Inc.</p>
        <div className="flex items-center">
          <a className="cursor-pointer">Privacy</a>&nbsp;·&nbsp;
          <a className="cursor-pointer">Terms</a>&nbsp;·&nbsp;
          <a className="cursor-pointer">Sitemap</a>&nbsp;·&nbsp;
          <a className="cursor-pointer">Destinations</a>&nbsp;
        </div>
      </div>
      <div className="flex items-center text-sm">
        <div className="flex items-center space-x-2 mr-3">
          <GlobeIcon />
          <a className="cursor-pointer">English (US)</a>
        </div>
        <div className="flex items-center space-x-2 mr-5">
            {CURRENY_SIGN}NGN
        </div>
      </div>
    </div>
</footer>
  )
}

export default Footer