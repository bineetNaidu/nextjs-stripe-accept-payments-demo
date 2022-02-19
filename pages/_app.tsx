import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: 'dark',
  });
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
