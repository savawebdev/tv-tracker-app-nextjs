import { useEffect } from 'react';
import useStore from '../store/store';
import { fetchData } from '../lib/helpers';
import { Provider, getSession } from 'next-auth/client';
import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  const { setShows, setLoading } = useStore();

  useEffect(() => {
    setLoading();
    fetchData('/api/shows/get-shows').then((res) => setShows(res.shows));
    setLoading();
  }, [setShows, setLoading]);

  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
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
