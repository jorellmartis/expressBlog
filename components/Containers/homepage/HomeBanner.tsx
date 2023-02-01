import DesignationLabel from "@/components/UIKit/DesignationLabel"
import FlexBox from "@/components/UIKit/FlexBox"
import ImageWrapper from "@/components/UIKit/ImageWrapper"
import Typography from "@/components/UIKit/Typography"
import { styled } from "@stitches/react"

const HomeBannerStyled = styled(FlexBox,{
    position: 'relative',
    height: '66vh',
    color:'#fff',
    gap:'3vh',
    padding: '10% 28% 0% 3%',
    background: 'radial-gradient(30.56% 76.04% at 74.58% 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)',
    // [`${ImageWrapper}`]:{
    //     maxWidth: 1000,
    //     position: 'absolute',
    //     top:0,
    //     left:0,
    // }
    'img':{
        position: 'absolute',
        top:0,
        left:0,
        zIndex:'-1'
    }
})
const HomeBanner = () => {
  return (
    <HomeBannerStyled flexDirection="column">
        <ImageWrapper objectFit="cover" src="/homeBanner.jpg" />
        <FlexBox css={{gap:'2vh'}} flexDirection="columnReverse">
            <Typography textType="Display" as='h1'>
                Step-by-step guide to choosing great font pairs
            </Typography>
            <Typography textType="Cap1" textTransform="uppercase" as='h2'>
                Posted on startup
            </Typography>
        </FlexBox>
        <Typography textType="label">
            <DesignationLabel author="John Wick" dateCreated="22/02/12"/>
        </Typography>
        <Typography textType="Bd01" as='p'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </Typography>
    </HomeBannerStyled>
  )
}

export default HomeBanner