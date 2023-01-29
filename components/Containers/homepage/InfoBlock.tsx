import ButtonUI from "@/components/UIKit/ButtonUI"
import FlexBox from "@/components/UIKit/FlexBox"
import Typography from "@/components/UIKit/Typography"
import { theme } from "@/stitches.config"
import { styled } from "@stitches/react"

const InfoBlockHeader = styled(FlexBox,{
    width: '100%',
    minHeight: 23,
    'div:nth-child(1)':{
        background: theme.colors.yellow,
        minWidth: '70%',
        marginLeft: '13%',
    },
    'div:nth-child(2)':{
        background: theme.colors.purple,
        minWidth: '17%' 
    }
})

const InfoBlockContent = styled(FlexBox,{
    background: theme.component.infoBlockBgColor,
    padding: '4.5%',
    gap: '4%'
})

const InfoBlock = () => {
  return (
    <FlexBox flexDirection="column">
        <InfoBlockHeader>
            <div></div>
            <div></div>
        </InfoBlockHeader>
        <InfoBlockContent>
            <FlexBox css={{width:'50%'}} flexDirection="column">
                <Typography textTransform="uppercase" textType="Cap1"  as='h3'>
                About Us
                </Typography>
                <Typography level={2} as='h4'>
                We are a community of content writers who share their learnings
                </Typography>
                <Typography css={{color: theme.component.infoBlockParagraphColor}} textType="Bd01" as='p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <ButtonUI bLink="#" bText="Read More" bSize="small"/>
            </FlexBox>
            <FlexBox css={{width:'50%'}} flexDirection="column">
                <Typography textTransform="uppercase" textType="Cap1"  as='h3'>
                Our mision
                </Typography>
                <Typography level={2} as='h4'>
                Creating valuable content for creatives all around the world
                </Typography>
                <Typography css={{color: theme.component.infoBlockParagraphColor}} textType="Bd01" as='p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
            </FlexBox>
        </InfoBlockContent>
    </FlexBox>
  )
}

export default InfoBlock