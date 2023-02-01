import SwipTestimonial from "@/components/Cards/SwipTestimonial"
import FlexBox from "@/components/UIKit/FlexBox"
import Typography from "@/components/UIKit/Typography"
import { theme } from "@/stitches.config"
import { styled } from "@stitches/react"

const TestimonialStyled = styled(FlexBox,{
    background: theme.component.testimonialBgColor,
    padding: '6% 9% 5% 9%',
}) 
const TextContent = styled(FlexBox,{
    paddingRight: '6%',
    width: '50%',
    marginRight: '9%',
    borderRight: `1px solid $component$blockBorderColor`,
})
const SwiperStyled = styled(FlexBox,{
    width: '50%',
})

const TestimonialBlock = () => {
  return (
    <TestimonialStyled>
        <TextContent flexDirection="column">
            <Typography textType="Cap1" textTransform="uppercase" as='h3'>
                testimonials
            </Typography>
            <Typography level={2} as='h4'>
                What people say about our blog
            </Typography>
            <Typography textType="Bd01" as='p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </Typography>
        </TextContent>
        <SwiperStyled flexDirection="column" alignItems="center">
            <SwipTestimonial/>
        </SwiperStyled>
    </TestimonialStyled>
  )
}

export default TestimonialBlock