import { signIn} from "next-auth/react"
import { NextPageWithLayout } from "@/pages/_app";
import Authentication from "@/components/Layout/Authentication";
import { styled } from "@stitches/react";
import FlexBox from "@/components/UIKit/FlexBox";
import ButtonUI from "@/components/UIKit/ButtonUI";

const LoginWrapper = styled(FlexBox,{

})
const login : NextPageWithLayout = () => {
    const handleGoogleAuth = async(event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        signIn('google',{callbackUrl:'http://localhost:3000'})
    }
  return (
    <LoginWrapper flexDirection="column">
        
        <ButtonUI bSize="large" bLink="" bText="Sign In" onClick={handleGoogleAuth}/>
    </LoginWrapper>
  )
};
export default login

login.getLayout = (page: React.ReactNode) => (
  <Authentication>
    {page}
  </Authentication>
)

