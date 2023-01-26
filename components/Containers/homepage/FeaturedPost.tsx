import DesignationLabel from "@/components/UIKit/DesignationLabel"
import FlexBox from "@/components/UIKit/FlexBox"
import ImageWrapper from "@/components/UIKit/ImageWrapper"
import Typography from "@/components/UIKit/Typography"
import { theme } from "@/stitches.config"
import { styled } from "@stitches/react"

const FeatPostContent = styled(FlexBox,{
    border: `1px solid ${theme.component.blockBorderColor}`,
    padding: '3%'
})
type FeaturedPostProps = {
    featuredPostData:{
        title: string
        description : string
        author: string
        dateCreated: string
        image: any
    }
} 
const FeaturedPost = ({featuredPostData}: FeaturedPostProps) => {
  return (
    <FlexBox css={{width:'50%'}} flexDirection="column">
        <Typography level={2} as= 'h2'>
            Featured Post
        </Typography>
        <FeatPostContent flexDirection="column">
        <ImageWrapper imagePostion={"bottom"} src="/placeholder.jpg"/>
        <DesignationLabel author={featuredPostData?.author}/>
        <Typography level={3} as= 'h3'>
            {featuredPostData?.title}
        </Typography>
        <Typography textType="Bd01" textOverflow="ellipsis" as='p'>
            {featuredPostData?.description}
        </Typography>
        </FeatPostContent>
    </FlexBox>
  )
}

export default FeaturedPost