import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import './../src/styles/global-overrides.css';
import defaultTheme from './../src/styles/chakra/theme';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={defaultTheme}>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default App;
