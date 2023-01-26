import { createStitches } from "@stitches/react";
import uiNavbarConfig from "./config/uiNavbarConfig";
import uiTypographyConfig from "./config/uiTypographyConfig";

export const {
    styled,// a function to create React components with styles.
    css, // a function to create CSS rules.
    globalCss, // define our global styles
    keyframes, // A function to create a global CSS @keyframe rule.
    theme, //Set up your design theme tokens. 
    createTheme,
    config,
    getCssText} = createStitches({
        theme:{
            colors:{
                white700: 'rgba(255, 255, 255, 0.7)',
                black100: '#232536',
                yellow100: '#FFD050',
                purple100: '#592EA9',
                darkGrey100: '#4C4C4C',
                mediumGrey100: '#6D6E76',
                lightGrey100: '#F4F4F4',
                lavender100: '#F4F0F8',
                lightYellow100: '#FBF6EA',
            },
            page:{
                // background:""
            },
            typography: uiTypographyConfig,
            navbar : uiNavbarConfig,
            //add any object styles you want....  
        },
        media:{
            bp1: "(min-width: 480px)",
        }
    }
)