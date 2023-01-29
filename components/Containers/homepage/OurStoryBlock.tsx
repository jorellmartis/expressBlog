import ButtonUI from "@/components/UIKit/ButtonUI"
import FlexBox from "@/components/UIKit/FlexBox"
import ImageWrapper from "@/components/UIKit/ImageWrapper"
import Typography from "@/components/UIKit/Typography"
import { styled } from "@stitches/react"

const OurStoryContent = styled(FlexBox,{
    position: 'absolute',
    background: 'White',
    width: '44%',
    padding: '4.5%',
    right: '20vw',
    bottom: 0,
    rowGap: 20,
})
const OurStoryBlock = () => {
  return (
    <FlexBox css={{position: 'relative'}}>
        <ImageWrapper css={{maxWidth:'949px', maxHeight:'705px'}} src="/storyImage.jpg"/>
        <OurStoryContent flexDirection="column">
            <Typography textType="Cap1" as='h2' textTransform="uppercase">
                Why we started 
            </Typography>
            <Typography as='h3' level={1}>
                It started out as a simple idea and evolved into our passion
            </Typography>
            <Typography as='p' textType="Bd01">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </Typography>
            <ButtonUI bLink="#" bSize="large" bText="Discover our story >"/>
        </OurStoryContent>
    </FlexBox>
  )
}

export default OurStoryBlock