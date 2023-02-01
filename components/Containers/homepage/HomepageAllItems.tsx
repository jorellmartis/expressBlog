import FlexBox from "@/components/UIKit/FlexBox"
import { styled } from "@stitches/react"
import AllPosts from "@/components/Containers/homepage/AllPosts"
import ChooseCategoryBlock from "@/components/Containers/homepage/ChooseCategoryBlock"
import FeaturedPost from "@/components/Containers/homepage/FeaturedPost"
import InfoBlock from "@/components/Containers/homepage/InfoBlock"
import { BuisnessLogo, EconomyLogo, StartupLogo, TechLogo } from "@/components/Icons/Utils"
import OurStoryBlock from "./OurStoryBlock"
import AuthorBlock from "./AuthorBlock"
import FeaturedInLogo from "./FeaturedInLogo"
import TestimonialBlock from "./TestimonialBlock"
import HomeBanner from "./HomeBanner"

const Wrapper = styled(FlexBox,{
  padding: '3% 5%',
  width: '100vw',
  height:'auto',
  gap: 128
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
const CategoryData = [
  {
    logo: <BuisnessLogo/>,
    title: 'Business',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    logo: <StartupLogo/>,
    title: 'Business',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    logo: <EconomyLogo/>,
    title: 'Economy',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    logo: <TechLogo/>,
    title: 'Technology',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
]

const HomepageAllItems = () => {
  return (
    <>
    <HomeBanner/>
    <Wrapper flexDirection="column">
      <FlexBox css={{gap:'3%'}}>
        <FeaturedPost featuredPostData={FeaturedData}/>
        <AllPosts data={AllPostdata}/>
      </FlexBox>
    <InfoBlock/>
    <ChooseCategoryBlock data={CategoryData}/>
    <OurStoryBlock/>
    <AuthorBlock/>
    <FeaturedInLogo/>
    <TestimonialBlock/>
    </Wrapper>
    </>
  )
}

export default HomepageAllItems