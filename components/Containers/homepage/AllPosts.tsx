import MiniPostCard, { MiniPostCardProps } from "@/components/Cards/MiniPostCard"
import FlexBox from "@/components/UIKit/FlexBox"
import Typography from "@/components/UIKit/Typography"
import { theme } from "@/stitches.config"
import { PostProps } from "@/types/typings"
import { styled } from "@stitches/react"
import Link from "next/link"


type AllPostsProp = {
    data: Array<PostProps>
}


const AllPosts = ({data}: AllPostsProp) => {
  return (
    <FlexBox flexDirection="column" css={{width:'50%'}}>
        <Typography level={2} as= 'h2'>
            All Posts
        </Typography>
        <FlexBox flexDirection="column">
            {data.map((post , index) =>(
                <Link href='#' key={`post-id-${new Date().getTime}-${index}`}>
                    <MiniPostCard postData={post}/>
                </Link>
            ))}
        </FlexBox>
    </FlexBox>
  )
}

export default AllPosts