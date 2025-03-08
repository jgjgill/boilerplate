import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

// 전역 테마 정의
export const vars = createGlobalTheme(":root", {
  colors: {
    primary: "#4263eb",
    secondary: "#339af0",
    success: "#40c057",
    danger: "#fa5252",
    warning: "#fd7e14",
    light: "#f8f9fa",
    dark: "#343a40",
    white: "#ffffff",
    background: "#f8f9fa",
    textPrimary: "#212529",
    textSecondary: "#6c757d",
    border: "#dee2e6",
  },
  space: {
    none: "0",
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
    xxxl: "2rem",
  },
  fontWeights: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  borderRadii: {
    none: "0",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    full: "9999px",
  },
});

// 전역 스타일
globalStyle("html", {
  margin: 0,
  padding: 0,
  backgroundColor: vars.colors.background,
  color: vars.colors.textPrimary,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  lineHeight: 1.5,
  height: "100%",
});

globalStyle("body", {
  display: "flex",
  height: "100%",
  width: "100%",
  margin: 0,
  padding: 0,
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("a", {
  color: vars.colors.primary,
  textDecoration: "none",
});

globalStyle("textarea, input, button", {
  fontSize: "1rem",
  fontFamily: "inherit",
  border: "none",
  borderRadius: "8px",
  padding: "0.5rem 0.75rem",
  boxShadow: "0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2)",
  backgroundColor: "white",
  lineHeight: 1.5,
  margin: 0,
});

globalStyle("textarea:hover, input:hover, button:hover", {
  boxShadow: "0 0px 1px hsla(0, 0%, 0%, 0.6), 0 1px 2px hsla(0, 0%, 0%, 0.2)",
});
