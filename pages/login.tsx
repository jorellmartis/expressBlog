import { signIn, signOut } from "next-auth/react"

const login = () => {
    const handleGoogleAuth = async() => {
        signIn('google',{callbackUrl:'http://localhost:3000'})
    }
  return (
    <div>
        <button onClick={handleGoogleAuth}>Login with google</button>
    </div>
  )
}

export default login