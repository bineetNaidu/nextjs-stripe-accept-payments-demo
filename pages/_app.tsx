import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: 'dark',
  });
  return (
    <NextUIProvider theme={theme}>
      <ToastProvider autoDismiss>
        <Component {...pageProps} />
      </ToastProvider>
    </NextUIProvider>
  );
}

export default MyApp;
