import { ReactElement } from 'react'
import { SideNavBar } from './miscelaneous/SideNavBar'

interface Props {
  children: ReactElement | JSX.Element
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <SideNavBar />
      {children}
    </>
  )
}
