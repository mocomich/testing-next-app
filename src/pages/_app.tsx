import { AppPropsWithLayout } from '@/libs/next/types';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const getPageTitle = Component.getPageTitle ?? ((page) => page);
  return getLayout(
    getPageTitle(
      <>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </>,
      pageProps
    )
  );
}
