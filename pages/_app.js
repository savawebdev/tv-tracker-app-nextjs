import { useEffect } from 'react';
import useStore from '../store/store';
import { fetchData } from '../lib/helpers';
import { SessionProvider, getSession } from 'next-auth/react';
import Head from 'next/head';
import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const { setShows, setLoading } = useStore();

  useEffect(() => {
    setLoading();
    fetchData('/api/shows/get-shows').then((res) => setShows(res.shows));
    setLoading();
  }, [setShows, setLoading]);

  return (
    <SessionProvider session={session}>
      <Head>
        <title>TV Tracker App</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

export default MyApp;
