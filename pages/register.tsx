import Authentication from "@/components/Layout/Authentication"
import FlexBox from "@/components/UIKit/FlexBox"
import { theme } from "@/stitches.config"
import { styled } from "@stitches/react"
import { NextPageWithLayout } from "./_app"

const RegisterWrapper = styled(FlexBox,{
    width: '35%',
    padding: '2%',
    gap: 45,
    background: theme.component.formBgColor
  })
  const RegisterHeader = styled(FlexBox,{
      gap: 35
  })

const Register : NextPageWithLayout = () => {
  return (
    <div>
    register
    </div>
  )
}
export default Register

Register.getLayout = (page: React.ReactNode) => (
    <Authentication>
        {page}
    </Authentication>
)
