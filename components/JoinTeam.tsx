import { styled } from "@stitches/react"
import ButtonUI from "./UIKit/ButtonUI"
import FlexBox from "./UIKit/FlexBox"
import Typography from "./UIKit/Typography"

const JoinTeamStyled = styled(FlexBox,{
    padding: '3% 38% 5%',
    textAlign: 'center',
    gap: '20px',
})

const JoinTeam = () => {
  return (
    <JoinTeamStyled justifyContent="center" alignItems="center" flexDirection="column">
        <Typography level={2} as='h2'>
            Join our team to be a part of our story
        </Typography>
        <Typography style="faded" textType="Bd01" as='p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </Typography>
        <ButtonUI bText="Join Now" bSize="large" bLink="#"/>
    </JoinTeamStyled>
  )
}

export default JoinTeam