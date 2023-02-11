import { IncomingMessage } from "http"
import { getSession, signOut} from "next-auth/react"

const protectedROute = () => {
    const handleSignOut = () => {
        signOut();
    }
  return (
    <div>
        <button onClick={handleSignOut}>Sign out </button>
    </div>
  )
}
export default protectedROute
export const getServerSideProps = async({req}: {req :IncomingMessage}) =>{
    const session = await getSession({req})
    if(!session){
        return{
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
    return{
        props:{session}
    }
}
