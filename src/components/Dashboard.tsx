import { useEffect, useState } from 'react'
import { SideNavBar } from './miscelaneous/SideNavBar'
import { ChallengeCard } from './challenge-card/ChallengeCard'
// import { ChallengeSmallCard } from './challenge-card/ChallengeSmallCard'
import { Challenge } from './challenge-card/challenge'

export const Dashboard = () => {
  const [challengesData, setChallengesData] = useState<Challenge[]>([])
  const [refetch, setRefetch] = useState(false)

  useEffect(() => {
    const allCookies = document.cookie
    fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/challenges`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${
          allCookies
            .split(';')
            .filter((cookie) => cookie.includes('auth='))[0]
            ?.split('auth=')[1]
            .trim() ?? ''
        }`
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
