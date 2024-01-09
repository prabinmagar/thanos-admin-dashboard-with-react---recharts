import { css } from "styled-components";

export const theme = {
  colors: {
    blue: "#5D5FEF",
    seasalt: "#FAFBFC",
    gray700: "#737791",
    ashgray: "#a5aea3",
    dodgerBlue: "#0095FF",
    emerald: "#00E096",
    red: "#EF4444",
    violet: "#A700FF",
    yellow: "#FFCF00",
    pink: "#FA5A7D",
    salmon: "#FF947A",
    cadet: "#151D48",
    malachite: "#3CD856",
    floralWhite: "#FFFAF1",
    orange: "#FFA412",
    white: "#ffffff",
    black: "#000000",
    columbiaBlue: "#C3D3E2",
    latte: "#FFF4DE",
    nyanza: "#DCFCE7",
    palePurple: "#F3E8FF",
    mistyRose: "#FFE2E5",
    sunset: "#FFD5A4",
    mauve: "#C5A8FF",
    aquamarine: "#8CFAC7",
    aliceBlue: "#F0F9FF",
    frenchGray: "#bdc9d3"
  },

  typography: {
    fontFamily: "'Public Sans', sans-serif",
  },

  breakpoints: {
    xs: "480px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1440px",
    xxxl: "1600px",
  },
};

// Reusable media query function
export const media = {
  xxxl: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xxxl}) {
      ${css(...args)}
    }
  `,
  xxl: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xxl}) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      ${css(...args)}
    }
  `,
  xs: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
      ${css(...args)}
    }
  `,
};
