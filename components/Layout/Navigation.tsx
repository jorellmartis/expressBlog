import { ReactElement } from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import JoinTeam from '../JoinTeam'
const Navigation = ({children} : { children: ReactElement}) => {
  return (
    <>
    <Navbar/>
    {children}
    <JoinTeam/>
    <Footer/>
    </>
  )
}

export default Navigation