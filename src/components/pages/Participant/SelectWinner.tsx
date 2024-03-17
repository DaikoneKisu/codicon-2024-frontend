import { useState } from 'react'
import { Participants } from './Participants'

//the id is a query param that will be used to fetch the participants from the backend
export const SelectWinner = () => {
  interface Participant {
    id: number
    username: string
    avatar: string
    resource: string
  }

  const [winner, setWinner] = useState<number>(-1)

  const [participants] = useState<Array<Participant>>([
    {
      id: 1,
      username: 'daineko',
      avatar: 'https://i.pravatar.cc/150?u=daineko',
      resource: 'https://github.com'
    },
    {
      id: 2,
      username: 'plusuzed',
      avatar: 'https://i.pravatar.cc/150?u=plusuzed',
      resource: 'https://github.com'
    },
    {
      id: 3,
      username: 'eliolare',
      avatar: 'https://i.pravatar.cc/150?u=eliolare',
      resource: 'https://github.com'
    },
    {
      id: 4,
      username: 'maia',
      avatar: 'https://i.pravatar.cc/150?u=maia',
      resource: 'https://github.com'
    },
    {
      id: 5,
      username: 'sagi',
      avatar: 'https://i.pravatar.cc/150?u=sagi',
      resource: 'https://github.com'
    },
    {
      id: 6,
      username: 'pnneumo',
      avatar: 'https://i.pravatar.cc/150?u=pnneumo',
      resource: 'https://github.com'
    }
  ])

  const handleWinner = () => {
    if (winner === -1) {
      alert('Please select a winner')
    } else {
      //TODO: logic for submit a winner to the backend
      alert(
        `The winner is ${participants.find((participant) => participant.id === winner)?.username}`
      )
      setWinner(-1)
    }
  }

  return (
    <div className="grid w-full grid-cols-1 gap-6 px-4 py-12 md:grid-cols-3">
      <div className="flex items-center justify-start md:col-span-2">
        <h1 className="text-3xl font-bold text-gray-900">Challenge Title</h1>
      </div>
      <div className="flex items-center justify-end md:col-span-1">
        <button onClick={handleWinner} className="rounded-lg bg-gray-800 px-4 py-2 text-white">
          Escoger Ganador
        </button>
      </div>
      {participants.map((participant) => (
        <button
          key={participant.id}
          onClick={() => setWinner(participant.id)}
          className="bg-card text-card-foreground rounded-lg border shadow-md transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white focus:bg-green-500"
          data-v0-t="card"
        >
          <Participants {...participant} />
        </button>
      ))}
    </div>
  )
}
