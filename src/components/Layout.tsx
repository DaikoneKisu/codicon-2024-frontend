import { ReactElement } from 'react'
import { NavBar } from './miscelaneous/NavBar'

interface Props {
  children: ReactElement | JSX.Element
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
