import CategoryCard from '@/components/Cards/CategoryCard'
import FlexBox from '@/components/UIKit/FlexBox'
import Typography from '@/components/UIKit/Typography'
import { CategoryCardProps } from '@/types/typings'
import Link from 'next/link'


type CategoryBlockData = {
    data: Array<CategoryCardProps>
}

const BlogCategories = ({data}:CategoryBlockData) => {
    return (
        <FlexBox  css={{gap:48}} flexDirection="column" justifyContent="center">
                <Typography  level={2} as='h2'>
                    All Categories
                </Typography>
                <FlexBox justifyContent="spaceEvenly" css={{gap:20}}>
                    {data?.map((card ,index) => (
                        <Link href='#' key={`catblog-card-id-${new Date().getTime}-${index}`}>
                            <CategoryCard data = {card} />
                        </Link>
                    ))}
                </FlexBox>
            </FlexBox>
    )   
}

export default BlogCategories