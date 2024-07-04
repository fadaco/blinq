import React from 'react'

type Props = {
    width: string
    height: string
}

const UserIcon = ({width = "1em", height = "1em"}: Props) => {
  return (
      <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 20 20"
          className="text-4xl ml-2.5 text-gray-400"
          height={height}
          width={width} xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
      </svg>
  )
}

export default UserIcon