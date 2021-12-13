import React, { Fragment } from 'react';
import { getSession } from 'next-auth/react';

import SearchShows from '../../components/SearchPage/SearchShows';

const SearchPage = () => {
  return (
    <Fragment>
      <SearchShows />
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

export default SearchPage;
