import AuthorCard from "@/components/Cards/AuthorCard"
import FlexBox from "@/components/UIKit/FlexBox"
import Typography from "@/components/UIKit/Typography"


const AuthorBlock = () => {
  return (
    <FlexBox css={{gap:48}} flexDirection="column" justifyContent="center">
        <Typography textAlign="center" level={2} as='h2'>
            List of Authors
        </Typography>
        <FlexBox>
            <AuthorCard/>
        </FlexBox>
    </FlexBox>
  )
}

export default AuthorBlock