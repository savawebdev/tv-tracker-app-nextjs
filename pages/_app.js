import { useEffect } from 'react';
import useStore from '../store/store';
import { fetchData } from '../lib/helpers';
import { SessionProvider, getSession } from 'next-auth/react';
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
