import DesignationLabel from "@/components/UIKit/DesignationLabel"
import FlexBox from "@/components/UIKit/FlexBox"
import ImageWrapper from "@/components/UIKit/ImageWrapper"
import Typography from "@/components/UIKit/Typography"
import { theme } from "@/stitches.config"
import { styled } from "@stitches/react"

const BlogBannerStyled = styled(FlexBox,{
    background: theme.component.blogBannerBgColor,
    padding: '3% 5%',
})
const BlogBanner = () =>   {
  return (
    <BlogBannerStyled>
        <div style={{width:'50%'}}>
        <FlexBox css={{gap:'2vh'}} flexDirection="columnReverse">
            <Typography level={2} as='h2'>
                Step-by-step guide to choosing great font pairs
            </Typography>
            <Typography textType="Cap1" textTransform="uppercase" as='h3'>
                Posted on startup
            </Typography>
        </FlexBox>
        <Typography textType="label">
        <DesignationLabel author="John Wick" dateCreated="22/02/12"/>
        </Typography>
        <Typography textType="Bd01" as='p'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </Typography>
        </div>
        <div style={{width:'50%',display:'flex', justifyContent:'flex-end'}}>
            <ImageWrapper objectFit="contain" css={{maxWidth:515}} src="/blogBannerPlaceholder.jpg"/>
        </div>
    </BlogBannerStyled>
  )
}

export default BlogBanner