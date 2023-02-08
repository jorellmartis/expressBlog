import { StartupLogo } from "@/components/Icons/Utils"
import AuthorLabel from "@/components/UIKit/AuthorLabel"
import FlexBox from "@/components/UIKit/FlexBox"
import ImageWrapper from "@/components/UIKit/ImageWrapper"
import Typography from "@/components/UIKit/Typography"
import { theme } from "@/stitches.config"
import { PostProps } from "@/types/typings"
import { styled } from "@stitches/react"

const AuthorData = {
  author: 'John Doe',
  dateCreated : 'February 2nd 2023',
}
const BlogDetailWrapper = styled(FlexBox,{
  padding: '7% 5%',
  width: '100vw',
  height:'auto',
  gap: 128
})

const BlogHeaderWrapper = styled(FlexBox,{
  padding: '0% 21%',
  gap:25,
})

type BlogDetailProps = {
  data: PostProps
}
const BlogDetail = ({data}: BlogDetailProps) => {
  return (
    <BlogDetailWrapper flexDirection="column">
      <BlogHeaderWrapper flexDirection="column">
        <AuthorLabel data={AuthorData} />
        <Typography level={1} as='h1'>
          Step-by-step guide to choosing great font pairs
        </Typography>
        <FlexBox>
          <StartupLogo/>
          <Typography level={4} as='h4'>
            Startup
          </Typography>
        </FlexBox>
      </BlogHeaderWrapper>
      <ImageWrapper src="/blogDetailPlaceholder.jpg"/>
    </BlogDetailWrapper>
  )
}

export default BlogDetail