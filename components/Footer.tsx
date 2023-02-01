import { theme } from "@/stitches.config"
import { styled } from "@stitches/react"
import { Logo } from "@/components//Icons/Utils"
import FlexBox from "@/components/UIKit/FlexBox"
import Typography from "@/components/UIKit/Typography"
import ButtonUI from "@/components/UIKit/ButtonUI"
import { FacebookLogo, InstaLogo, LinkedInLogo, TwitterLogo } from "./Icons/SocialMedia"

const FooterStyled = styled(FlexBox,{
  width: '100vw',
  height: 'clamp(200px, 50vw, 800px)',
  background: theme.navbar.navbgcolor,
  // position: 'absolute',
  // bottom: 0,
  // left: 0,
  padding: '4% 6%'
})

const FooterHeader = styled(FlexBox,{
  width: '100%',
  paddingBottom: '5%',
  'ul':{
    width: '100%',
    color: 'White',
    display: 'flex',
    justifyContent: 'flex-end',
    'li':{
      listStyle: 'none',
      paddingRight: 24
    }
  }
})

const FooterContent = styled(FlexBox,{
  background: theme.navbar.footercontentcolor,
  padding: '6%  4%'
})

const FooterBase = styled(FlexBox,{
  width: '100%',
  paddingTop: 48,
})
const Footer = () => {
  return (
  <FooterStyled flexDirection="column">
    <FooterHeader>
      <Logo/>
      <ul>
          <Typography as="li" textType="Bd01">
            Home
          </Typography>
          <Typography as="li" textType="Bd01">
            Blog
          </Typography>
          <Typography as="li" textType="Bd01">
            About Us
          </Typography>
          <Typography as="li" textType="Bd01">
            Contact us
          </Typography>
          <Typography as="li" textType="Bd01">
            Privacy Policy
          </Typography>
      </ul>
    </FooterHeader>
    <FooterContent justifyContent="spaceBetween" alignItems="flexStart">
      <Typography css={{color:'#fff', maxWidth: '65%'}} level={2}  as= "h2">
      Subscribe to our news letter to get latest updates and news
      </Typography>
      <div>
        form here
      </div>
      <ButtonUI bLink="#" bText="Subscribe"/>
    </FooterContent>
    <FooterBase justifyContent="spaceBetween" alignItems="flexStart">
      <Typography as='p' css={{color: '$colors$white700'}}>
      Finstreet 118 2561 Fintown<br/>
      Hello@finsweet.com  020 7993 2905
      </Typography>
      <FlexBox css={{filter:'contrast(0)', gap:20, scale: 1.5}}>
      <FacebookLogo/>
      <TwitterLogo/>
      <InstaLogo/>
      <LinkedInLogo/>
      </FlexBox>
    </FooterBase>
  </FooterStyled>
    )
}

export default Footer