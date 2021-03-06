/**
 * Styled componentes helper functions
 */

export const setColor = {
    colorAlpha  : "#666666",
    colorGamma  : "#0F7BEC",
    colorDelta_1: "#131313",
    colorDelta_2: "#292929",
    colorDelta_3: "#1E1F23",
    colorPi_1   : "#999999",
    colorPi_2   : "#666666",
    colorPi_3   : "#E3E3E3",
    colorPi_4   : "#F3F3F3",
    colorPi_5   : "#F6F6F6",
    colorSigma  : "#FFFFFF",
}

export const setFont = {
    primaryFont  : '"Rubik"',
    secondaryFont: '"Rubik"'
}

export const setPostMaxWidth = {
    width: '66rem'
}

export const setBreakpoint = {
    small  : '57.6rem',
    medium : '76.8rem',
    large  : '99.2rem',
    xLarge : '120rem',
    xxLarge: '140rem'
}

export const setGridGap = {
    gridGap: '4rem',
    gridGapAlpha: '2rem',
    gridGapBeta: '3rem',
    gridGapGamma: '5rem'
}

export const setRadius = {
    radius:       '1rem',
    radiusAlpha:  '1rem',
    radiusBeta:   '0.5rem',
}

export const setSectionPadding = {
    padding: `10rem 0;`
}

export const setContainer = {
    container: `
        max-width: ${ setBreakpoint.xLarge };
        margin: 0 auto;
        width: 90vw;
    `
}

export const setContainerFluid = {
    container: `
        margin: 0 auto;
        width: 90vw;
    `
}

export const setTransition = ({
    property = 'all',
    time = '0.3s',
    timing = 'ease-in-out' 
} = {}) => {
    return `transition: ${property} ${time} ${timing}`
}