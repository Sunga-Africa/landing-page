import '@/styles/globals.css';
// import CookieConsentBanner from '@/components/CookieConsentBanner';
import type { AppProps } from 'next/app';
import Head from 'next/head';
export default function App({ Component, pageProps }: AppProps) {
  const metadata = {
    title: 'Home | sunga-web',
    description: ''
  };
  return (
    <>
      <Head>
        <title>{metadata?.title}</title>
        <meta
          property="og:title"
          content="Sunga - Empowering Zambian's Financial Future"
        />
        <meta
          property="og:description"
          content="Save, grow, and reach your goals with ease. Take charge of your money with Sunga."
        />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunga.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sunga - Empowering Zambian's Financial Future"
        />
        <meta
          name="twitter:description"
          content="Save, grow, and reach your goals with ease. Take charge of your money with Sunga."
        />
        <meta name="twitter:image" content="" />
        <meta
          name="description"
          content="Save, grow, and reach your goals with ease. Take charge of your money with Sunga."
        />
      </Head>
      <>
        <Component {...pageProps} />
        {/* <CookieConsentBanner /> */}
      </>
    </>
  );
}
