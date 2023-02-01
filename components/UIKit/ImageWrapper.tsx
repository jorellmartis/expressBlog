import { CSS, styled, VariantProps } from "@stitches/react"

const ImageStyled = styled('img',{
    width: '100%',
    height: '100%',
    variants: {
        objectFit:{
            contain:{
                objectFit: 'contain'
            },
            cover:{
                objectFit: 'cover'
            },
        },
        imagePostion:{
            top:{
                objectPosition: 'bottom'
            },
            right:{
                objectPosition: 'right'
            },
            left:{
                objectPosition: 'left'
            },
            bottom:{
                objectPosition: 'bottom'
            },
            center:{
                objectPosition: 'center'
            }
        }
    }
})

interface ImageWrapperProps extends VariantProps<typeof ImageStyled>  {
    src: string
    alt?: string
    objectFit?: 'contain' | 'cover'
    imagePosition?: 'top' | 'right' | 'bottom' | 'left' | 'center' 
    css?: CSS
}
const ImageWrapper = ({src, alt, ...rest}: ImageWrapperProps) => {
  return (
    <ImageStyled {...rest} src={src} />
  )
}

export default ImageWrapper