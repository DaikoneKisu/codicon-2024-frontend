import { useState } from 'react'
import { Challenges } from './Challenges'
// import { Link } from "react-router-dom"

export const HomePage = () => {
  interface loggedUser {
    username: string
    rol: string
  }
  const [currentUser] = useState<loggedUser>({
    username: 'user',
    rol: 'user'
  })
  return (
    <div className="mt-6 flex h-64 flex-col">
      <Challenges />
      {currentUser.rol === 'admin' && (
        <a
          className="w-full rounded-md bg-[#007bff] px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-600"
          href="/"
        >
          {' '}
          <button>Create Challenge</button>
        </a>
      )}
    </div>
  )
}
