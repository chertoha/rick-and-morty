export const breakpoints = { mobile: "360", desktop: "1440" };

export const theme = {
  colors: {
    mainText: "#081F32",
    secondaryText: "#6E798C",
    mainBackground: "#FFFFFF",
  },

  fonts: {
    roboto: "'Roboto', sans-serif",
    karla: "'Karla', sans-serif",
  },

  fontSizes: {
    xxs: "12px",
    xs: "14px",
    s: "16px",
    m: "18px",
    l: "20px",
    xl: "24px",
    xxl: "32px",
  },

  fontWeights: { regular: 400, medium: 500, bold: 700 },

  radii: { borderRadius: "4px" },

  shadows: {
    boxShadow:
      "0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)",
  },

  breakpoints: { mobile: breakpoints.mobile, desktop: breakpoints.desktop },

  mq: {
    mobileOnly: `@media screen and (max-width: ${
      +breakpoints.mobile - 0.02
    }px)`,
    // mobileUp: `@media screen and (min-width: ${
    //   breakpoints.mobile
    // }px) and (max-width: ${+breakpoints.desktop - 0.02}px)`,
    // upToDesktop: `@media screen and (max-width: ${
    //   +breakpoints.desktop - 0.02
    // }px)`,
    desktop: `@media screen and (min-width: ${breakpoints.desktop}px)`,
  },
};
