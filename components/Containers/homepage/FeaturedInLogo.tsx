import { FeatLogo1, FeatLogo2, FeatLogo3, FeatLogo4, FeatLogo5 } from "@/components/Icons/FeaturedLogos"
import FlexBox from "@/components/UIKit/FlexBox"
import Typography from "@/components/UIKit/Typography"
import { theme } from "@/stitches.config"
import { styled } from "@stitches/react"


const LogoWrapper = styled(FlexBox,{
    width:'80%',
    marginLeft:'20px',
    opacity:0.8
})
const FeaturedInLogo = () => {
  return (
    <FlexBox justifyContent="flexStart">
        <FlexBox css={{width:'20%'}} flexDirection="columnReverse">
            <Typography style="faded" level={4} as='h4'>
                Featured In
            </Typography>
            <Typography style="faded" textType="Bd02" as='span'>
                We are
            </Typography>
        </FlexBox>
        <LogoWrapper justifyContent="spaceBetween">
            <FeatLogo1/>
            <FeatLogo2/>
            <FeatLogo3/>
            <FeatLogo4/>
            <FeatLogo5/>
        </LogoWrapper>
    </FlexBox>
  )
}

export default FeaturedInLogo