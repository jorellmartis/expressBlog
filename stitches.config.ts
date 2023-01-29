import { createStitches } from "@stitches/react";
import uiNavbarConfig from "@/config/uiNavbarConfig";
import uiTypographyConfig from "@/config/uiTypographyConfig";
import uiComponentConfig from "@/config/uiComponentConfig";

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
                black: '#232536',
                yellow: '#FFD050',
                purple: '#592EA9',
                darkGrey: '#4C4C4C',
                mediumGrey: '#6D6E76',
                mediumGrey100: 'rgba(109, 110, 118, 0.1)',
                lightGrey: '#F4F4F4',
                lavender: '#F4F0F8',
                lightYellow: '#FBF6EA',
            },
            page:{
                // background:""
            },
            typography: uiTypographyConfig,
            navbar : uiNavbarConfig,
            component : uiComponentConfig,
            //add any object styles you want....  
        },
        media:{
            bp1: "(min-width: 480px)",
        }
    }
)