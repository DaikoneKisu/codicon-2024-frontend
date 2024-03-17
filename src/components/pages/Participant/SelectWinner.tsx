import { useState, useEffect } from 'react'
import { Participants } from './Participants'
import { ParticipantsDataEstructure, Participant } from './type'
import { useNavigate } from 'react-router-dom'

//the id is a query param that will be used to fetch the participants from the backend
export const SelectWinner = () => {
  interface Winner {
    participantId: number
    challengeId: number
  }
  const [winner, setWinner] = useState<Winner>({
    participantId: -1,
    challengeId: 1
  })
  const navigate = useNavigate()
  const [participants, setParticipants] = useState<Array<Participant>>([])
  const [challengeTitle, setChallengeTitle] = useState<string>('')
  const [challengeDescription, setchallengeDescription] = useState<string>('')

  useEffect(() => {
    const fetchData = (): Promise<ParticipantsDataEstructure> => {
      return fetch(`${import.meta.env.VITE_PLAYER_CHALLENGE_ID}/${winner.challengeId}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
        }
      }).then((response) => response.json()) as Promise<ParticipantsDataEstructure>
    }
    const mapFromApiToParticipants = (
      apiResponse: ParticipantsDataEstructure
    ): Array<Participant> => {
      setChallengeTitle(apiResponse.data.name)
      setchallengeDescription(apiResponse.data.description)
      const {
        data: { players }
      } = apiResponse
      return players.map((participantFromApi) => {
        const { id, username, resource } = participantFromApi
        const avatar = `https://i.pravatar.cc/150?u=${username}`
        return {
          id,
          username,
          avatar,
          resource
        }
      })
    }
    fetchData()
      .then((apiResponse: ParticipantsDataEstructure) => {
        const participants = mapFromApiToParticipants(apiResponse)
        setParticipants(participants)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [winner.challengeId])

  const handleWinner = async () => {
    if (winner.participantId === -1) {
      alert('Please select a winner')
      return
    }
    //some things are hardcoded, when it should be dynamic, fix when i understand the backend
    try {
      await fetch(
        `${import.meta.env.VITE_PLAYER_CHALLENGE_SET_WINNER}/${winner.challengeId}/${winner.participantId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_TOKEN}`
          },
          body: JSON.stringify({ winner })
        }
      )
    } catch (error) {
      throw new Error('Error in setting winner')
    }

    alert(
      `Felicidades ${participants?.find((participant) => participant.id === winner.participantId)?.username} has ganado!`
    )
    setWinner({
      participantId: -1,
      challengeId: winner.challengeId
    })
    navigate('/dashboard')
  }

  return (
    <div className="grid w-full grid-cols-1 gap-6 px-4 py-12 md:grid-cols-3">
      <div className="flex items-center justify-start md:col-span-2">
        <h1 className="text-3xl font-bold text-gray-900">{challengeTitle} Challenge</h1>
      </div>
      <div className="flex items-center justify-start md:col-span-2">
        <h3 className="text-2xl font-semibold text-gray-500">{challengeDescription}</h3>
      </div>
      <div className="flex items-center justify-end md:col-span-1">
        <button
          onClick={() => void handleWinner()}
          className="rounded-lg bg-gray-800 px-4 py-2 text-white"
        >
          Escoger Ganador
        </button>
      </div>
      {participants?.map((participant) => (
        <button
          key={participant.id}
          onClick={() =>
            setWinner({
              participantId: participant.id,
              challengeId: winner.challengeId
            })
          }
          className="bg-card text-card-foreground rounded-lg border shadow-md transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white focus:bg-green-500"
          data-v0-t="card"
        >
          <Participants {...participant} />
        </button>
      ))}
    </div>
  )
}
