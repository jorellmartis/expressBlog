import { styled } from "@stitches/react"
import BlogAllPosts from "@/components/Containers/bloglisting//BlogAllPosts"
import BlogBanner from "@/components/Containers/bloglisting//BlogBanner"
import BlogCategories from "./BlogCategories"
import { CategoryData } from "../homepage/HomepageAllItems"
import FlexBox from "@/components/UIKit/FlexBox"

const BlogListingWrapper = styled(FlexBox,{
  padding: '3% 5%',
  width: '100vw',
  height:'auto',
  gap: 64
})
const BlogAllItems = () => {
  return (
    <>
    <BlogBanner/>
    <BlogListingWrapper flexDirection="column">
      <BlogAllPosts/>
      <BlogCategories data={CategoryData}/>
    </BlogListingWrapper>
    </>
  )
}

export default BlogAllItems