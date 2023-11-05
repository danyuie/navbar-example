import Link from 'next/link'
import React from 'react'
interface CartLinkProps {
  link: string,
  name: string,
}

const CartLink = ({link, name}:CartLinkProps) => {
  return (
    <Link href={link} className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
                </Link>
  )
}

export default CartLink