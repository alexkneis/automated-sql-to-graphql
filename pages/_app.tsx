import {ApolloProvider} from '@apollo/client';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {useEffect} from 'react';

import {initializeApollo} from '../src/graphql/apollo-client';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function MyApp({Component, pageProps}: AppProps) {
    const apolloClient = initializeApollo(pageProps.initialApolloState);

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Automated SQL to Graphql</title>
                <meta
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                    name="viewport"
                />
            </Head>
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        </>
    );
}
