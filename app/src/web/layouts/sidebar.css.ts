import { globalStyle, keyframes, style } from "@vanilla-extract/css";

export const spinKeyframes = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const progressKeyframes = keyframes({
  "0%": { background: "#e3e3e3" },
  "50%": { background: "hsla(224, 98%, 58%, 0.5)" },
  "100%": { background: "#e3e3e3" },
});

export const container = style({
  display: "flex",
  width: "100%",
});

export const sidebar = style({
  width: "22rem",
  backgroundColor: "#f7f7f7",
  borderRight: "solid 1px #e3e3e3",
  display: "flex",
  flexDirection: "column",
  padding: "0 2rem",
});

export const sidebarHeading = style({
  fontSize: "1rem",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  margin: 0,
  padding: "1rem 2rem",
  borderTop: "1px solid #e3e3e3",
  order: 1,
  lineHeight: 1,
});

export const sidebarDiv = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  borderBottom: "1px solid #e3e3e3",
});

globalStyle(`${sidebarDiv} form`, {
  position: "relative",
});

export const searchInput = style({
  width: "100%",
  paddingLeft: "2rem",
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0.625rem 0.75rem",
  backgroundSize: "1rem",
  position: "relative",
});

export const loadingSearchInput = style({
  boxSizing: "border-box",
  width: "100%",
  paddingLeft: "2rem",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0.625rem 0.75rem",
  backgroundSize: "1rem",
  position: "relative",
  backgroundImage: "none",
});

export const searchSpinner = style({
  width: "1rem",
  height: "1rem",
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%23000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M20 4v5h-.582m0 0a8.001 8.001 0 00-15.356 2m15.356-2H15M4 20v-5h.581m0 0a8.003 8.003 0 0015.357-2M4.581 15H9' /%3E%3C/svg%3E\")",
  animation: `${spinKeyframes} 1s infinite linear`,
  position: "absolute",
  left: "0.625rem",
  top: "0.75rem",
});

export const sidebarNav = style({
  flex: 1,
  overflow: "auto",
  paddingTop: "1rem",
});

export const sidebarList = style({
  padding: 0,
  margin: 0,
  listStyle: "none",
});

export const navLink = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
  whiteSpace: "pre",
  padding: "0.5rem",
  borderRadius: "8px",
  color: "inherit",
  textDecoration: "none",
  gap: "1rem",
  transition: "background-color 100ms",
  ":hover": {
    background: "#e3e3e3",
  },
});

export const activeNavLink = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
  whiteSpace: "pre",
  padding: "0.5rem",
  borderRadius: "8px",
  color: "white",
  textDecoration: "none",
  gap: "1rem",
  transition: "background-color 100ms",
  background: "hsl(224, 98%, 58%)",
});

export const pendingNavLink = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
  whiteSpace: "pre",
  padding: "0.5rem",
  borderRadius: "8px",
  color: "inherit",
  textDecoration: "none",
  gap: "1rem",
  transition: "background-color 100ms",
  animation: `${progressKeyframes} 2s infinite ease-in-out`,
  animationDelay: "200ms",
});

export const main = style({
  overflow: "auto",
  width: "100%",
  padding: "2rem",
});
