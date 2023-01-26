import FlexBox from "@/components/UIKit/FlexBox"
import { styled } from "@stitches/react"
import AllPosts from "./AllPosts"
import FeaturedPost from "./FeaturedPost"

const Wrapper = styled(FlexBox,{
  padding: '3% 5%',
  gap: '3%',
  width: '100vw',
  height:'auto'
})




const AllPostdata = [
  {
      title: '8 Figma design systems that you can download for free today.',
      author: 'John Wick',
      dateCreated: '24/01/2000'
  }
]

const FeaturedData = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  description : 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  author: 'John Wick',
  dateCreated: '24/5/75',
  image: '/src.here'
}

const HomepageAllItems = () => {
  return (
    <>
    <Wrapper css={{width: '100vw', height:'auto'}}>
    <FeaturedPost featuredPostData={FeaturedData}/>
    <AllPosts data={AllPostdata}/>
    </Wrapper>
    </>
  )
}

export default HomepageAllItems