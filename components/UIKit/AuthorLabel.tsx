import { theme } from "@/stitches.config";
import { styled } from "@stitches/react";
import FlexBox from "@/components/UIKit/FlexBox";
import Typography from "./Typography";


const AuthorLabelStyled = styled(FlexBox,{

})

type AuthorLabelData = {
        author: string
        dateCreated? : string
        authorImg?: any
    }
type AuthorLabelProps = {
    data: AuthorLabelData
}

const AuthorLabel = ({data}: AuthorLabelProps) => {
  return (
    <AuthorLabelStyled justifyContent="flexStart" alignItems="center">
        <div>
            img here
        </div>
        <div>
            <Typography style="anchor" level={3} as='h3'>
                {data?.author}
            </Typography>
            <Typography textType="Bd01" as='p'>
                {`Posted on ${data?.dateCreated}`}
            </Typography>
        </div>
    </AuthorLabelStyled>
  )
}

export default AuthorLabel