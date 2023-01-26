import { theme } from "@/stitches.config";
import { styled } from "@stitches/react";
import FlexBox from "@/components/UIKit/FlexBox";
import Typography from "@/components/UIKit/Typography";


type DesignationLabelProps = {
    author: string
    dateCreated? : string
}
const DesignationLabel = ({author, dateCreated}: DesignationLabelProps) => {
  return (
    <FlexBox>
        <Typography textType="label" as= 'span'>
            {`By ${author} |`}
        </Typography>
        <Typography textType="label" as= 'span'>
            {dateCreated}
        </Typography>
    </FlexBox>
  )
}

export default DesignationLabel