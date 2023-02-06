import { styled } from "@stitches/react"
import FlexBox from "@/components/UIKit/FlexBox"
import ImageWrapper from "@/components/UIKit/ImageWrapper"
import Typography from "@/components/UIKit/Typography"

const BlogPostCardStyled = styled(FlexBox,{
    gap: 32,
    marginTop:'5%'
})
const PostContent = styled(FlexBox,{
    marginTop: '3%',
    gap:16
})
const PostImageContent = styled('div',{
    width: '35%'
})
const BlogPostCard = () => {
  return (
    <BlogPostCardStyled>
        <PostImageContent>
            <ImageWrapper src="/postImagePlaceholder.jpg" objectFit="contain"/>
        </PostImageContent>
        <PostContent flexDirection="column">
            <FlexBox css={{gap:20}} flexDirection="columnReverse">
                <Typography level={2} as='h2'>
                    Design tips for designers that cover everything you need
                </Typography>
                <Typography textType="Cap1" style="anchor" as='h3' textTransform="uppercase">
                    Startup
                </Typography>
                
            </FlexBox>
            <Typography textType="Bd01" as = 'p' style="faded">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </Typography>
        </PostContent>

    </BlogPostCardStyled>
  )
}

export default BlogPostCard