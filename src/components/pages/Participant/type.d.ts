export interface Participant {
  id: number
  username: string
  avatar: string
  resource: string
}
export interface ParticipantsDataEstructure {
  data: {
    players: Array<{
      id: number
      username: string
      avatar: string
      resource: string
      role: string
      ticketDiary: number
      ticketWeekly: number
      ticketMonthly: number
      email: string
      password: string
      createdAt: string
      updatedAt: string
    }>
    name: string
    description: string
  }
}
