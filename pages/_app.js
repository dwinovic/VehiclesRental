import '../src/styles/globals.css';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Playfair+Display:wght@500;700&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500&family=Nunito:wght@400;600;700&family=Playfair+Display:wght@500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
