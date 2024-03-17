import { useEffect, useState } from 'react'
import { SideNavBar } from './miscelaneous/SideNavBar'
import { ChallengeCard } from './challenge-card/ChallengeCard'
// import { ChallengeSmallCard } from './challenge-card/ChallengeSmallCard'
import { Challenge } from './challenge-card/challenge'

export const Dashboard = () => {
  const [challengesData, setChallengesData] = useState<Challenge[]>([])
  const [refetch, setRefetch] = useState(false)

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
          ? response.json().then(({ data }) => setChallengesData(data as Challenge[]))
          : Promise.reject(response)
      )
      .catch((error) => (import.meta.env.DEV ? void console.error(error) : ''))
  }, [refetch])

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
          {challengesData.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
    </div>
  )
}
