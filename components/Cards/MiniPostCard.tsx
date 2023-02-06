import React from 'react'
import DesignationLabel from '@/components/UIKit/DesignationLabel'
import FlexBox from '@/components/UIKit/FlexBox'
import Typography from '@/components/UIKit/Typography'
import { styled } from '@stitches/react'
import { theme } from '@/stitches.config'

export type MiniPostCardProps = {
    postData : {
        title: string
        author: string
        dateCreated: string
    }
}

const MiniPostStyled = styled(FlexBox,{
    padding:'5% 21% 5% 9%',
    transition: 'background 200ms',
    '&:hover':{
        background: theme.component.miniCardBgColorHover
    }
})
const MiniPostCard = ({postData}: MiniPostCardProps) => {
  return (
    <MiniPostStyled flexDirection='columnReverse'>
        <Typography level={4} as= 'h4'>
            {postData?.title}
        </Typography>
        <DesignationLabel author={postData?.author}/>
    </MiniPostStyled>
  )
}

export default MiniPostCard