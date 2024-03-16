import { ChallengeCategory, ChallengeType, ChallengeDifficulty } from './challengetype.'

import { useState } from 'react'

export const CreateChallenge = () => {
  const [points] = useState<Array<number>>([10, 70, 300])

  return (
    <div className="my-6">
      <div className="mx-auto  grid max-w-4xl items-center gap-16 rounded-md bg-white p-8 font-[sans-serif] text-[#333] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
        <h1 className="text-3xl font-extrabold"> Creating Challenge</h1>
        <form className="ml-auo space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Challenge name"
            className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]"
            autoComplete="off"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]"
          />

          {/* challenges point entry */}
          <select className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]">
            {points.map((point, index) => (
              <option key={index} value={point}>
                {point}
              </option>
            ))}
          </select>
          {/* challenge type entry */}
          <select className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]">
            {Object.values(ChallengeType).map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          {/* difficults entry point */}
          <select className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]">
            {Object.values(ChallengeDifficulty).map((difficulty, index) => (
              <option key={index} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
          {/* challenges category entry point */}
          <select className="w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]">
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
