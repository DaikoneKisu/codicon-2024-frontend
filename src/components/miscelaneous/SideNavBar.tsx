import { Link } from 'react-router-dom'

import { Profile } from './Profile'

export const SideNavBar = () => {
  return (
    <div
      id="sidebar"
      className="w-30 h-screen overflow-x-hidden bg-white px-3 shadow-xl transition-transform duration-300 ease-in-out md:block md:w-60 lg:w-60"
    >
      <div className="mt-10 space-y-6 md:space-y-10">
        <h1 className="text-center text-4xl font-bold md:hidden">
          R<span className="text-teal-600">!</span>
        </h1>
        <h1 className="hidden text-center text-sm font-bold md:block md:text-xl">
          Retame<span className="text-teal-600">!</span>
        </h1>
        <Profile />
        <div id="menu" className="flex flex-col space-y-2">
          <Link
            to="/"
            className="rounded-md px-2 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-teal-500 hover:text-base hover:text-white"
          >
            <svg
              className="inline-block h-6 w-6 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
            <span className="">Retos</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
