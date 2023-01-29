import { theme } from "@/stitches.config"
import { CategoryCardProps } from "@/types/typings"
import { styled } from "@stitches/react"
import { BuisnessLogo } from "../Icons/Utils"
import FlexBox from "../UIKit/FlexBox"
import Typography from "../UIKit/Typography"

const LogoHolder = styled('div',{
    width: 'min-content',
    borderRadius:'15px',
    transition: 'all 400ms'
})

const CategoryCardStyled = styled(FlexBox,{
    border: '1px solid $component$blockBorderColor',
    width: 'calc(20vw - 20px)',
    padding: 32,
    rowGap: 15,
    transition: 'all 300ms',
    '&:hover':{
        cursor: 'pointer',
        background: '$component$categoryCardBgHover',
        [`${LogoHolder}`] :{
            background: theme.colors.lightYellow,
        }
    }
})

type CategoryCardData = {
    data: CategoryCardProps
}

const CategoryCard = ({data} : CategoryCardData) => {
    return (
        <CategoryCardStyled flexDirection="column">
            <LogoHolder>
                {data?.logo}
            </LogoHolder>
            <Typography level={3} as='h3'>
                {data?.title}
            </Typography>
            <Typography css={{color: theme.component.infoBlockParagraphColor}} textType="Bd01" as='p'>
                {data?.description}
            </Typography>
        </CategoryCardStyled>
    )
}

export default CategoryCard