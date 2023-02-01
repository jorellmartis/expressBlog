import { theme } from "@/stitches.config"
import { styled } from "@stitches/react"
import { Logo } from "@/components/Icons/Utils"
import ButtonUI from "@/components/UIKit/ButtonUI"
import FlexBox from "@/components/UIKit/FlexBox"
import Typography from "@/components/UIKit/Typography"

const NavbarStyled = styled(FlexBox,{
  background: theme.navbar.navbgcolor,
  height: 80,
  padding: '0px 80px',
  'ul':{
    width: '100%',
    paddingTop: 10,
    color: 'White',
    display: 'flex',
    justifyContent: 'flex-end',
    'li':{
      listStyle: 'none',
      paddingRight: 24
    }
  }
})
const Navbar = () => {
  return (
  <NavbarStyled  justifyContent="spaceBetween" alignItems="center">
    <Logo/>
    <FlexBox  css={{width:'90%'}}>
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
          <ButtonUI bText="Suscribe" bLink="#"/>
      </ul>
    </FlexBox>
  </NavbarStyled>
  )
}

export default Navbar