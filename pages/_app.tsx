import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles.css';
import RedLine from '../components/BaseRed';
import RedLineBottom from '../components/baseRedBottom';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      NProgress.start();
    });

    Router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });

    Router.events.on('routeChangeError', () => {
      NProgress.done();
    });
  }, []);
  const socialMediaIconsData = [
    {
      src: '/assets/icons/instagramIcon.svg',
      alt: 'Instagram',
      link: 'https://www.instagram.com/',
    },
    {
      src: '/assets/icons/twitterIcon.svg',
      alt: 'Twitter',
      link: 'https://twitter.com/',
    },
    {
      src: '/assets/icons/facebookIcon.svg',
      alt: 'Facebook',
      link: 'https://www.facebook.com/',
    },
  ];
  return (
    <>
      <RedLine socialMediaIcons={socialMediaIconsData} />

      <Component {...pageProps} />

      <RedLineBottom />
    </>
  );
}

export default MyApp;
