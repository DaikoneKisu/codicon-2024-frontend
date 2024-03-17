import { useEffect, useState } from 'react'
import { SideNavBar } from '../miscelaneous/SideNavBar'
import { FaMedal } from 'react-icons/fa'

interface UserPodium {
  id: number
  username: string
  points: number
}

export const Podium = () => {
  const [podiumData, setPodiumData] = useState<UserPodium[]>([
    {
      id: 1,
      username: 'elliot',
      points: 23
    },
    {
      id: 2,
      username: 'salcedo',
      points: 22
    },
    {
      id: 3,
      username: 'seba',
      points: 1
    },
    {
      id: 4,
      username: 'eduardo',
      points: -3
    }
  ])
  const [refetch, setRefetch] = useState(false)

  //TODO: Update fetch
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/challenges`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${
          document.cookie
            .split(';')
            .filter((cookie) => cookie.startsWith('auth='))[0]
            ?.split('auth=')[1] ?? ''
        }`,
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzEwNjY0NDc1LCJleHAiOjE3MTA2NjgwNzV9.F6eK_3_WVQ6XwmnQxrrvPLLlyA5EOBRWJQgwAw4laFQ'
      }
    })
      .then((response) =>
        response.ok
          ? response.json().then(({ data }) => setPodiumData(data as UserPodium[]))
          : Promise.reject(response)
      )
      .catch((error) => (import.meta.env.DEV ? void console.error(error) : ''))
  }, [refetch])

  var firstPlace = podiumData[0] || null
  var secondPlace = podiumData[1] || null
  var thirdPlace = podiumData[2] || null

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
        <div>
          {podiumData.map((user) => (
            <article className="m-8 space-y-2 rounded-lg bg-white p-6 shadow-md">
              <div className="mt-8 flex items-center justify-between gap-4">
                {user === firstPlace ? <FaMedal className="text-3xl text-yellow-500" /> : null}
                {user === secondPlace ? <FaMedal className="text-3xl text-gray-500" /> : null}
                {user === thirdPlace ? <FaMedal className="text-3xl text-orange-500" /> : null}
                <img
                  src={`https://i.pravatar.cc/150?u=${user.username}`}
                  alt="Profile"
                  className="h-20 w-20 rounded-full"
                />
                <div className="mr-40 text-xl">{user.username}</div>
                <div className="text-lg font-bold">{user.points} Points</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
