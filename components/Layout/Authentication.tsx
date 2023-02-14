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
  '.authLogoContent':{
    background: theme.component.logoAuthBgColor,
  }
})

const FormWrapper = styled(FlexBox,{
  width: '35%',
  padding: '2%',
  gap: 45,
  background: theme.component.formBgColor,
  '.login-form':{
    width: '100%'
  },
  '.ant-input-affix-wrapper':{
    '&:hover':{
      borderColor: theme.colors.yellow,
    },
    '&.ant-input-affix-wrapper-focused':{
      borderColor: theme.colors.yellow,
      
    }
  }
})

const Authentication = ({children}: {children: React.ReactNode}) => {
  return (
    <AuthWrapper justifyContent="center" alignItems="center">
      <ImageWrapper objectFit="cover" css={{position: 'absolute', zIndex:-1}} src="/loginBg.jpg"/>
      <AuthContent>
        <FlexBox className="authLogoContent" justifyContent="center" alignItems="center" css={{width: '65%'}}>
          <LogoAuth/>
        </FlexBox>
        <FormWrapper alignItems="flexStart" flexDirection="column" >
        {children}
        </FormWrapper>
      </AuthContent>
    </AuthWrapper>
  )
}

export default Authentication