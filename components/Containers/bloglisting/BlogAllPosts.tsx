import BlogPostCard from "@/components/Cards/BlogPostCard"
import FlexBox from "@/components/UIKit/FlexBox"
import Typography from "@/components/UIKit/Typography"

const BlogAllPosts = () => {
return (
    <FlexBox flexDirection="column">
        <Typography level={2} css= {{paddingBottom: 28, borderBottom: '1px solid $component$blockBorderColor'}} as= 'h2'>
            All Posts
        </Typography>
        <FlexBox flexDirection="column">
            {/* {data.map((post , index) =>(
                <Link href='#' key={`post-id-${new Date().getTime}-${index}`}>
                    <MiniPostCard postData={post}/>
                </Link>
            ))} */}
            <BlogPostCard/>
            <BlogPostCard/>
        </FlexBox>
        <FlexBox css={{marginTop: '5.5%', gap:17}} justifyContent="center">
            <Typography level={4}>
                {'< Prev'}
            </Typography>
            <Typography level={4}>
                {'Next >'}
            </Typography>

        </FlexBox>

    </FlexBox>
)
}

export default BlogAllPosts