import { ReactElement } from 'react'
import Footer from '@/components/Containers/Footer'
import Navbar from '@/components/Containers/Navbar'
const Navigation = ({children} : { children: ReactElement}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default Navigation