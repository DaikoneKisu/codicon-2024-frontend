import { useState } from 'react'

export const Profile = () => {
  interface User {
    username: string
    rol: string
    avatar: string
  }
  const [user] = useState<User>({
    username: 'pepito',
    avatar: 'https://i.pravatar.cc/150?u=pepito',
    rol: 'admin'
  })

  return (
    <>
      <div id="profile" className="space-y-3">
        <img src={user.avatar} alt="Avatar user" className="mx-auto w-10 rounded-full md:w-16" />
        <div>
          <h2 className="text-center text-xs font-medium text-teal-500 md:text-sm">
            {user.username}
          </h2>
          <p className="text-center text-xs text-gray-500">{user.rol}</p>
        </div>
      </div>
      <div className="flex rounded-md border-2 border-gray-200 ring-teal-500 focus-within:ring-2">
        <input
          type="text"
          className="w-full rounded-bl-md rounded-tl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
          placeholder="Search"
        />
        <button className="hidden rounded-br-md rounded-tr-md px-2 py-3 md:block">
          <svg
            className="h-4 w-4 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
          </svg>
        </button>
      </div>
    </>
  )
}
