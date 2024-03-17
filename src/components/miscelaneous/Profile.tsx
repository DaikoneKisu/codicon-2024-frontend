import { useEffect, useState } from 'react'

interface User {
  username: string
  avatar: string
  points: number
  entries: {
    toDailies: number
    toWeeklies: number
    toMonthlies: number
  }
}

const emptyUser = {
  username: '',
  avatar: '',
  points: 0,
  entries: {
    toDailies: 0,
    toWeeklies: 0,
    toMonthlies: 0
  }
}

export const Profile = () => {
  const [user, setUser] = useState<User>(emptyUser)

  // TODO: Fetch user data using its session token
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/users`, {
  //     method: 'GET',
  //     headers: {

  //     }
  // })

  return (
    <>
      <div id="profile" className="space-y-3">
        <img
          src={user.avatar || 'https://i.pravatar.cc/150?u=unknown'}
          alt="Avatar user"
          className="mx-auto w-10 rounded-full md:w-16"
        />
        <div>
          <h2 className="text-center text-sm font-medium text-teal-500 md:text-lg">
            {user.username || 'nickname'}
          </h2>
          <p className="text-center text-xs text-gray-500 md:text-sm">{user.points ?? 100}</p>
          <p className="text-center text-xs text-gray-500 md:text-sm">
            {user.entries?.toDailies || 3}{' '}
            <span>
              <DailyTicket />
            </span>
            {user.entries?.toWeeklies || 2}{' '}
            <span>
              <WeeklyTicket />
            </span>
            {user.entries?.toMonthlies || 1}{' '}
            <span>
              <MonthlyTicket />
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

const DailyTicket = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-ticket inline -rotate-45"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#ff2825"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 5l0 2" />
    <path d="M15 11l0 2" />
    <path d="M15 17l0 2" />
    <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
  </svg>
)

const WeeklyTicket = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-ticket inline -rotate-45"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#6f32be"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 5l0 2" />
    <path d="M15 11l0 2" />
    <path d="M15 17l0 2" />
    <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
  </svg>
)

const MonthlyTicket = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-ticket inline -rotate-45"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#ffbf00"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 5l0 2" />
    <path d="M15 11l0 2" />
    <path d="M15 17l0 2" />
    <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
  </svg>
)
