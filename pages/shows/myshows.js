import React, { Fragment } from 'react';
import { getSession } from 'next-auth/react';

import MyShows from '../../components/MyShows/MyShows';

const MyShowsPage = () => {
  return (
    <Fragment>
      <MyShows />
    </Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default MyShowsPage;
