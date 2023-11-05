import React from 'react'
import CartLink from './CartLink'
const link = [
  {name: 'Default Navbar', link: '/default-navbar'},
  {name: 'Navbar Button', link: '/navbar-with-button'},
  {name: 'Navbar Submenu', link: '/navbar-with-submenu'},
  {name: 'Navbar Search', link: '/navbar-with-search'},
  {name: 'Navbar User', link: '/navbar-user'},
  {name: 'Navbar Language', link: '/navbar-language'},
]
const Cart = () => {
  return (
    
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
            Bài Tập Navbar
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Bấm vào các liên kết dưới để đến trang bài tập, hạn cuối ngày 11/11/2023.</p>
        <ul className="my-4 space-y-3">
            {link.map((link)=>(
              <li key={link.link}>
                <CartLink name={link.name} link={link.link}  />
              </li>
            ))}
        </ul>
        <div>
            <p className="inline-flex items-center text-xs font-normal text-gray-500  dark:text-gray-400">
                <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                Sử dụng flex-box và các thuộc tính padding marign </p>
        </div>
    </div>

  )
}

export default Cart