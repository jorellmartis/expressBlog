import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { styled } from "@stitches/react";
import FlexBox from "../UIKit/FlexBox";
import Typography from "../UIKit/Typography";
import ImageWrapper from "../UIKit/ImageWrapper";

const SwiperWrapper = styled('div',{
    width:'100%',
    height: '100%',
    '.testimonialSwiper':{
        '.swiper-button-prev':{
            right: '10%',
            bottom: '5%',
            top:'unset',
            left:'unset',
        },
        '.swiper-button-next':{
            right: '0%',
            bottom: '5%',
            top:'unset',
            left:'unset',
        },
    },    
})
const SwiperSlideContent = styled(FlexBox,{
    paddingRight: '28%',
    gap: 121,
})

const SwipTestimonial = () => {
  return (
    <SwiperWrapper>
        <Swiper navigation={true} modules={[Navigation]} className="testimonialSwiper">
            <SwiperSlide>
                <SwiperSlideContent flexDirection="column" alignItems="center">
                    <Typography level={4} as = 'h4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <FlexBox css={{width:'100%', gap:'3%'}}>
                        <div style={{
                            maxWidth: 48
                        }}>
                            <ImageWrapper objectFit="contain" src="/authorPlaceholder.png" />
                        </div>
                        <FlexBox flexDirection="column">
                            <Typography level={4} as='span'>
                                Jonathan Vallem
                            </Typography>
                            <Typography style="faded" textType="Bd01" as= 'span'>
                                New York
                            </Typography>
                        </FlexBox>
                    </FlexBox>
                </SwiperSlideContent>
            </SwiperSlide>
            <SwiperSlide>
                <SwiperSlideContent flexDirection="column" alignItems="center">
                    <Typography level={4} as = 'h4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <FlexBox css={{width:'100%', gap:'3%'}}>
                        <div style={{
                            maxWidth: 48
                        }}>
                            <ImageWrapper objectFit="contain" src="/authorPlaceholder.png" />
                        </div>
                        <FlexBox flexDirection="column">
                            <Typography level={4} as='span'>
                                Jonathan Vallem
                            </Typography>
                            <Typography style="faded" textType="Bd01" as= 'span'>
                                New York
                            </Typography>
                        </FlexBox>
                    </FlexBox>
                </SwiperSlideContent>
            </SwiperSlide>
            <SwiperSlide>
                <SwiperSlideContent flexDirection="column" alignItems="center">
                    <Typography level={4} as = 'h4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <FlexBox css={{width:'100%', gap:'3%'}}>
                        <div style={{
                            maxWidth: 48
                        }}>
                            <ImageWrapper objectFit="contain" src="/authorPlaceholder.png" />
                        </div>
                        <FlexBox flexDirection="column">
                            <Typography level={4} as='span'>
                                Jonathan Vallem
                            </Typography>
                            <Typography style="faded" textType="Bd01" as= 'span'>
                                New York
                            </Typography>
                        </FlexBox>
                    </FlexBox>
                </SwiperSlideContent>
            </SwiperSlide>
        </Swiper>
    </SwiperWrapper>
  )
}

export default SwipTestimonial
