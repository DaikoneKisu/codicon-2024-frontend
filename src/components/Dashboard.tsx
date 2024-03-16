import { SideNavBar } from './miscelaneous/SideNavBar'

export const Dashboard = () => {
  return (
    <div className="font-poppins antialiased">
      <div id="view" className="flex h-full w-screen flex-row">
        <button className="absolute left-0 top-0 rounded-md border-2 border-gray-200 bg-white p-2 text-gray-500 shadow-lg focus:bg-teal-500 focus:text-white focus:outline-none sm:hidden">
          <svg
            className="h-5 w-5 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </button>
        <SideNavBar />
      </div>
    </div>
  )
}
