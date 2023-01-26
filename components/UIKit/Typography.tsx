import { theme} from "@/stitches.config";
import { CSS, styled, VariantProps } from "@stitches/react";
import {ReactNode } from "react";


const TextStyled = styled('div',{
    fontStyle: "normal",
    marginBottom: 0,
    marginTop: 0,
    variants:{
        level: {
                1:{
                fontSize: theme.typography.fontSizeH1,
                lineHeight: theme.typography.lineHeightH1,
                fontWeight: theme.typography.fontWeightCommon,
                },

                2: {
                fontSize: theme.typography.fontSizeH2,
                lineHeight: theme.typography.lineHeightH2,
                fontWeight: theme.typography.fontWeightCommon,
                },

                3: {
                fontSize: theme.typography.fontSizeH3,
                lineHeight: theme.typography.lineHeightH3,
                fontWeight: theme.typography.fontWeightCommon,
                },

                4: {
                fontSize: theme.typography.fontSizeH4,
                lineHeight: theme.typography.lineHeightH4,
                fontWeight: theme.typography.fontWeightCommon,
                },

                5: {
                fontSize: theme.typography.fontSizeH5,
                lineHeight: theme.typography.lineHeightH5,
                fontWeight: theme.typography.fontWeightCommon,
                },

                6:{
                    fontSize: theme.typography.fontSizeH6,
                    lineHeight: theme.typography.lineHeightH6,
                    fontWeight: theme.typography.fontWeightCommon,
                }

            },
        textType: {
            Display: {
                fontSize: theme.typography.fontSizeDisplay,
                lineHeight: theme.typography.lineHeightDisplay,
                fontWeight: theme.typography.fontWeightCommon,
            },
            Bd01:{
                fontSize: theme.typography.fontSizeBd01,
                lineHeight: theme.typography.lineHeightBd01,
                fontWeight: theme.typography.fontWeightBody,
            },
            Bd02:{
                fontSize: theme.typography.fontSizeBd02,
                lineHeight: theme.typography.lineHeightBd02,
                fontWeight: theme.typography.fontWeightBody,
            },
            label:{
                fontSize: theme.typography.fontSizeLabel,
                lineHeight: theme.typography.lineHeightLabel,
                fontWeight: theme.typography.fontWeightBody,
            }
        },
    },
}
);
type IHeadings = 1 | 2 | 3 | 4 | 5 | 6  ;
type ITextTypes = 'Display' | 'Bd01' | 'Bd02' | 'label';

interface TypographyProps extends VariantProps<typeof TextStyled> {
    level?: IHeadings
    textType?: ITextTypes
    children?: ReactNode
    css?: CSS
    as?: any;
    href?: string;
    textOverflow?: "ellipsis";
    textTransform?: "uppercase" | "lowercase" | "capitalize";
    target?: string;
    lineClamp?: "yes";
    dangerouslySetInnerHTML?: {
    __html: string;
    };
}

const Typography = ({children, ...rest}:TypographyProps) => (    
    <TextStyled {...rest}>{children}</TextStyled>
)

export default Typography