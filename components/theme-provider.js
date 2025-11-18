"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export const ThemeProvider = (props) => {
  return <NextThemesProvider {...props}>{props.children}</NextThemesProvider>;
};