import { useState } from 'react'
import { Challenge, ChallengeCategory, ChallengeDifficulty, ChallengeType } from './challengetype.'

export const Challenges = () => {
  const [challenges] = useState<Array<Challenge>>([
    {
      id: 1,
      name: 'Challenge 1',
      description: 'Description 1',
      points: 10,
      category: ChallengeCategory.PROGRAMMING,
      difficulty: ChallengeDifficulty.EASY,
      type: ChallengeType.DIARY,
      limitPlayers: 10
    },
    {
      id: 2,
      name: 'Challenge 2',
      description: 'Description 2',
      points: 20,
      category: ChallengeCategory.MATH,
      difficulty: ChallengeDifficulty.MEDIUM,
      type: ChallengeType.WEEKLY,
      limitPlayers: 20
    },
    {
      id: 3,
      name: 'Challenge 3',
      description: 'Description 3',
      points: 30,
      category: ChallengeCategory.FITNESS,
      difficulty: ChallengeDifficulty.HARD,
      type: ChallengeType.MONTHLY,
      limitPlayers: 30
    }
  ])

  return (
    <>
      {challenges.map((challenge) => (
        <div className="mx-6 w-4/12 rounded-xl px-6 py-4 shadow-lg" key={challenge.id}>
          <h1>{challenge.name}</h1>
          <p>{challenge.description}</p>
          <p>{challenge.points}</p>
          <p>{challenge.category}</p>
          <p>{challenge.difficulty}</p>
          <p>{challenge.type}</p>
          <p>{challenge.limitPlayers}</p>
        </div>
      ))}
    </>
  )
}
