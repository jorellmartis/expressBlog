import { signIn, signOut } from "next-auth/react"
import { NextPageWithLayout } from "@/pages/_app";
import React from "react";


const login : NextPageWithLayout = () => {
    const handleGoogleAuth = async() => {
        signIn('google',{callbackUrl:'http://localhost:3000'})
    }
  return (
    <div>
        <button onClick={handleGoogleAuth}>Login with google</button>
    </div>
  )
};
login.getLayout = (page: React.ReactNode) => (
  <h1>Finally understood custom layouts</h1>
)


export default login