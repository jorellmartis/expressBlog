import { theme } from "@/stitches.config"
import { styled } from "@stitches/react"
import { FacebookLogo, InstaLogo, LinkedInLogo, TwitterLogo } from "../Icons/SocialMedia"
import FlexBox from "../UIKit/FlexBox"
import ImageWrapper from "../UIKit/ImageWrapper"
import Typography from "../UIKit/Typography"

const AuthorCardStyled = styled(FlexBox,{
    padding: 40,
    gap: '0.5vw',
    width: 'calc(20vw - 20px)',
    background: '$component$authorCardBgColor',
    transition: 'all 250ms',
    '&:hover':{
        cursor: "pointer",
        background: '$component$authorCardBgHoverColor',
    },
    'img':{
        transition: 'all 300ms',
        '&:hover':{
        scale: 1.2
    }
    }

})
const AuthorCard = () => {
  return (
    <AuthorCardStyled flexDirection="column" alignItems="center">
        <div>
            <ImageWrapper src="/authorPlaceholder.png"/>
        </div>
        <Typography textAlign="center" as='h3' level={3}>
            Floyd Miles
        </Typography>
        <Typography textAlign="center" as='p' textType="Bd02">
            Content Writer @Company
        </Typography>
        <FlexBox css={{gap:'0.7vw'}}>
            <FacebookLogo/>
            <TwitterLogo/>
            <InstaLogo/>
            <LinkedInLogo/>
        </FlexBox>
    </AuthorCardStyled>
  )
}

export default AuthorCard