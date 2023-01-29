import { theme } from "@/stitches.config"
import { styled } from "@stitches/react"
import FlexBox from "@/components/UIKit/FlexBox"



const ButtonStyled =  styled('a',{
  display: 'inline-flex',
  cursor: 'pointer',
  padding:'10px 20px',
  background: theme.colors.yellow,
  height: '100%',
  transition: 'all 300ms',
    '&:hover':{
      background: '#EDC14A'
    },
  variants: {
    buttonSize: {
      small: {
        padding:'10px 10px',
      },
      medium: {
        padding:'15px 20px',
      },
      large:{
        padding:'25px 30px',
      },
    }
  }
})

type ButtonUIProps = {
  bText : string
  bLink : string
  bSize? : 'small' | 'medium' | 'large'
}

const ButtonUI = ({bText, bLink, bSize}: ButtonUIProps) => {
  return (
    <FlexBox>
    <ButtonStyled buttonSize={bSize} href={bLink}>{bText}</ButtonStyled>
    </FlexBox>
  )
}

export default ButtonUI