import React from 'react'

const page = () => {
  return (
    
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div className="flex items-center md:order-2 text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
      <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center gap-2 font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
      <svg width="24" height="24" viewBox="0 0 24 24" fill='currentColor' xmlns="http://www.w3.org/2000/svg">
<path d="M11.9989 2.01416C6.4761 2.01416 1.9989 6.49116 1.9989 12.0142C1.9989 13.6302 2.3857 15.1512 3.066 16.5022C4.7114 19.7692 7.995 22.0132 11.9989 22.0142C17.5217 22.0152 21.9989 17.5372 21.9989 12.0142C21.9989 6.49116 17.5217 2.01416 11.9989 2.01416ZM11.9989 4.01416C12.9308 4.01416 14.0019 5.60316 14.5349 7.94016C13.7258 7.99216 12.8785 8.01416 11.9989 8.01416C11.1156 8.01416 10.2682 7.98115 9.458 7.92715C9.9906 5.67715 11.067 4.01416 11.9989 4.01416ZM8.4637 4.83716C8.0078 5.67616 7.6728 6.74216 7.4453 7.74716C6.7055 7.64716 6.0358 7.50216 5.4723 7.35916C6.2478 6.29816 7.2791 5.40316 8.4637 4.83716ZM15.5484 4.83115C16.635 5.39315 17.7308 6.28517 18.5235 7.37717C17.9606 7.51817 17.2723 7.64317 16.5364 7.74017C16.3089 6.73517 15.9258 5.61815 15.5484 4.83115ZM4.5231 9.16415C5.2815 9.39515 6.0639 9.56716 7.1159 9.70816C7.0296 10.4692 6.9989 11.1992 6.9989 12.0142C6.9989 12.8292 7.0369 13.5722 7.1232 14.3332C6.051 14.4772 5.2735 14.6172 4.5036 14.8512C4.1503 13.9482 3.9989 13.0422 3.9989 12.0142C3.9989 10.9862 4.1698 10.0672 4.5231 9.16415ZM19.4658 9.16916C19.8191 10.0722 19.9989 10.9862 19.9989 12.0142C19.9989 13.0422 19.8265 13.9512 19.4732 14.8542C18.7054 14.6202 17.9284 14.4632 16.8603 14.3202C16.9444 13.5672 16.9989 12.8182 16.9989 12.0142C16.9989 11.1992 16.9442 10.4551 16.8579 9.69315C17.9075 9.54815 18.7072 9.39916 19.4658 9.16916ZM9.1268 9.90115C10.0537 9.96815 10.9876 10.0142 11.9989 10.0142C13.0045 10.0142 13.9545 9.96816 14.8771 9.89816C14.9615 10.6012 14.9989 11.2422 14.9989 12.0142C14.9989 12.7862 14.972 13.4102 14.8877 14.1122C13.962 14.0442 13.007 14.0142 11.9989 14.0142C10.9882 14.0142 10.0421 14.0502 9.1127 14.1192C9.026 13.4082 8.9989 12.7982 8.9989 12.0142C8.9989 11.2422 9.0424 10.6032 9.1268 9.90115ZM11.9989 16.0142C12.8772 16.0142 13.7194 16.0472 14.5282 16.0992C13.9656 18.4402 12.9348 20.0142 11.9989 20.0142C11.067 20.0142 10.0145 18.3642 9.4372 16.0972C10.2485 16.0432 11.1142 16.0142 11.9989 16.0142ZM7.4499 16.2922C7.6773 17.2972 8.0731 18.4002 8.4505 19.1882C7.3433 18.6622 6.2802 17.7562 5.4697 16.6702C6.0427 16.5252 6.6914 16.3932 7.4499 16.2922ZM16.5394 16.2902C17.2919 16.3882 17.9435 16.5302 18.5155 16.6732C17.7909 17.6472 16.7271 18.6112 15.5583 19.1752C15.9846 18.3052 16.3119 17.2952 16.5394 16.2902Z" fill="currentColor"/>
      </svg>

        English (US)
      </button>
      <button data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default page