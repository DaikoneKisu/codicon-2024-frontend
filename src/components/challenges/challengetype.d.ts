export interface Challenge {
  id?: number
  userId?: number
  name: string
  description: string
  points: number
  category: ChallengeCategory
  difficulty: ChallengeDifficulty
  type: ChallengeType
  limitPlayers: number
  isActivate?: boolean
}
