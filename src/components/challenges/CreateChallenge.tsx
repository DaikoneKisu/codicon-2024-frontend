import type { Challenge } from './challengetype.d.ts'
import { ChallengeCategory, ChallengeType, ChallengeDifficulty } from './challengesenums.ts'
// import { useNavigate } from 'react-router-dom'

import { ChangeEvent, FormEvent } from 'react'

import { useState } from 'react'

export const CreateChallenge = () => {
  // const navigate = useNavigate()
  const [points] = useState<Array<number>>([10, 70, 300])

  const [challenge, setChallenge] = useState<Challenge>({
    name: '',
    description: '',
    points: 0,
    category: ChallengeCategory.PROGRAMMING,
    difficulty: ChallengeDifficulty.EASY,
    type: ChallengeType.DIARY,
    limitPlayers: 0
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    console.log(challenge)
    try {
      const response = await fetch('http://localhost:3000/challenges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${proccess.env.TOKEN}`
        },
        body: JSON.stringify(challenge)
      })

      if (!response.ok) {
        console.log(response.statusText)
      }

      // navigate('/')
      // return
    } catch (err) {
      throw new Error('Error creating challenge')
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === 'points' || name === 'limitPlayers') {
      setChallenge({
        ...challenge,
        [name]: parseInt(value)
      })
      return
    }
    setChallenge({
      ...challenge,
      [name]: value
    })
  }

  return (
    <div className="my-6">
      <div className="mx-auto  grid max-w-4xl items-center gap-16 rounded-md bg-white p-8 font-[sans-serif] text-[#333] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
        <h1 className="text-3xl font-extrabold"> Creating Challenge</h1>

        <form className="ml-auo space-y-4" onSubmit={() => handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Challenge name"
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]"
            autoComplete="off"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            autoComplete="off"
            className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]"
          />

          {/* challenges point entry */}
          <select
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]"
          >
            {points.map((point, index) => (
              <option key={index} value={point}>
                {point}
              </option>
            ))}
          </select>
          {/* challenge type entry */}
          <select
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]"
          >
            {Object.values(ChallengeType).map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          {/* difficults entry point */}
          <select
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]"
          >
            {Object.values(ChallengeDifficulty).map((difficulty, index) => (
              <option key={index} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
          {/* challenges category entry point */}
          <select
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]"
          >
            {Object.values(ChallengeCategory).map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {/* challenges max players */}
          <input
            type="number"
            min={5}
            max={15}
            name="limitPlayers"
            placeholder="Max players"
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-[#007bff] px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-600"
          >
            Create Challenge!
          </button>
        </form>
      </div>
    </div>
  )
}
