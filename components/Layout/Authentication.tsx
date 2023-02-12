import { styled } from "@stitches/react";
import { theme } from "@/stitches.config";
import ImageWrapper from "@/components/UIKit/ImageWrapper";
import FlexBox from "@/components/UIKit/FlexBox";
import { LogoAuth } from "@/components/Icons/Authentication";

const AuthWrapper = styled(FlexBox,{
  width: '100vw',
  height: '100vh',
})
const AuthContent = styled(FlexBox,{
  padding: '8% 5%',
  width: '100%',
  height: '100%',
  'div:nth-child(1)':{
    background: theme.component.logoAuthBgColor,
  }
})
const Authentication = ({children}: {children: React.ReactNode}) => {
  return (
    <AuthWrapper justifyContent="center" alignItems="center">
      <ImageWrapper objectFit="cover" css={{position: 'absolute', zIndex:-1}} src="/loginBg.jpg"/>
      <AuthContent>
        <FlexBox justifyContent="center" alignItems="center" css={{width: '65%'}}>
          <LogoAuth/>
        </FlexBox>
        {children}
      </AuthContent>
    </AuthWrapper>
  )
}

export default Authentication