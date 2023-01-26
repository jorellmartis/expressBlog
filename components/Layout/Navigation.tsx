import { ReactElement } from 'react'
import Footer from '../Containers/Footer'
import Navbar from '../Containers/Navbar'
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