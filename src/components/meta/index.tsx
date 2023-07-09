import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';

export function PageTitle<T>(getPageTitle?: (pageProps: T) => ReactNode) {
  return function getPageTitleNode(page: ReactElement, pageProps: T) {
    return (
      <>
        <Head>
          <title>{getPageTitle?.(pageProps) || process.env.PRODUCT_NAME}</title>
        </Head>
        {page}
      </>
    );
  };
}
