import { FacebookLogo, InstaLogo, LinkedInLogo, TwitterLogo } from "@/components/Icons/SocialMedia"
import ButtonUI from "@/components/UIKit/ButtonUI"
import FlexBox from "@/components/UIKit/FlexBox"
import Typography from "@/components/UIKit/Typography"
import { theme } from "@/stitches.config"
import { styled } from "@stitches/react"

const ColorPalette = styled('div',{
    minWidth: 100,
    minHeight: 100,
})


const template = () => {
  return (
    <FlexBox css={{padding:'0% 5%' , rowGap: 10}} flexDirection='column'>
        <Typography as='h1' level={1}>
            Heading 1
        </Typography>
        <Typography level={2}>
            Heading 2
        </Typography>
        <Typography level={3}>
            Heading 3
        </Typography>
        <Typography level={4}>
            Heading 4
        </Typography>
        <Typography level={5}>
            Heading 5
        </Typography>
        <Typography level={6}>
            Heading 6
        </Typography>
        <Typography textType='Display'>
            Display
        </Typography>
        <Typography textType='Bd01'>
            Body 01
        </Typography>
        <Typography textType='Bd02'>
            Body 02
        </Typography>
        <Typography textType='label'>
            label
        </Typography>
        <FlexBox>
            <ColorPalette css={{background: theme.colors.black100 }}>
            </ColorPalette>
            <ColorPalette css={{background: theme.colors.darkGrey100 }}>
            </ColorPalette>
            <ColorPalette css={{background: theme.colors.mediumGrey100}}>
            </ColorPalette>
            <ColorPalette css={{background: theme.colors.purple100 }}>
            </ColorPalette>
            <ColorPalette css={{background: theme.colors.yellow100 }}>
            </ColorPalette>
            <ColorPalette css={{background: theme.colors.lavender100 }}>
            </ColorPalette>
            <ColorPalette css={{background: theme.colors.lightGrey100 }}>
            </ColorPalette>
            <ColorPalette css={{background: theme.colors.lightYellow100 }}>
            </ColorPalette>
        </FlexBox>
        <ButtonUI bLink="href" bText="Read fsfsffsfsfs" bSize="medium"/>
        <InstaLogo/>
        <FacebookLogo/>
        <LinkedInLogo/>
        <TwitterLogo/>
    </FlexBox>
    )
}

export default template