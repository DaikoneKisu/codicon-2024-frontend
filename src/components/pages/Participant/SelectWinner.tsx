import { useState, useEffect } from 'react'
import { Participants } from './Participants'
import { ParticipantsDataEstructure, Participant } from './type'

//the id is a query param that will be used to fetch the participants from the backend
export const SelectWinner = () => {
  interface Winner {
    participantId: number
    challengeId: number
  }
  const [winner, setWinner] = useState<Winner>({
    participantId: -1,
    challengeId: 2
  })
  const [participants, setParticipants] = useState<Array<Participant>>([])

  useEffect(() => {
    const fetchData = (): Promise<ParticipantsDataEstructure> => {
      return fetch('http://localhost:3000/users', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzEwNjYwNTU1LCJleHAiOjE3MTA3NDY5NTV9.ouKoxGpgbqwo80squX7ZDmwfE5SK7pXKcLOMMS3bZeM'
        }
      }).then((response) => response.json()) as Promise<ParticipantsDataEstructure>
    }
    const mapFromApiToParticipants = (
      apiResponse: ParticipantsDataEstructure
    ): Array<Participant> => {
      return apiResponse.map((participantFromApi) => {
        const { id, username, avatar, resource } = participantFromApi
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
        const participants = mapFromApiToParticipants(apiResponse.data)
        setParticipants(participants)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  const handleWinner = async () => {
    if (winner.participantId === -1) {
      alert('Please select a winner')
      return
    }
    //some things are hardcoded, when it should be dynamic, fix when i understand the backend
    try {
      await fetch(
        `http://localhost:3000/playerChallenge/setWinner/${winner.challengeId}/${winner.participantId}  `,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzEwNjYwNTU1LCJleHAiOjE3MTA3NDY5NTV9.ouKoxGpgbqwo80squX7ZDmwfE5SK7pXKcLOMMS3bZeM'
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
  }

  return (
    <div className="grid w-full grid-cols-1 gap-6 px-4 py-12 md:grid-cols-3">
      <div className="flex items-center justify-start md:col-span-2">
        <h1 className="text-3xl font-bold text-gray-900">Challenge Title</h1>
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
