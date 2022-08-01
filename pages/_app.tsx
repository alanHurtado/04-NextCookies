import "../styles/globals.css";
import type { AppInitialProps, AppProps } from "next/app";
import { darkTheme, lightTheme, customTheme } from "../themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Theme } from "@mui/system";

interface PropsPages extends AppInitialProps {
  theme: string;
  name: string;
}

function MyApp({ Component, pageProps }: AppProps) {
  const newPropspages: PropsPages = pageProps;
  const theme =
    newPropspages.theme === "custom"
      ? customTheme
      : newPropspages.theme === "dark"
      ? darkTheme
      : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export default MyApp;
