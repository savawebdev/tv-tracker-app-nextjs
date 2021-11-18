import React, { Fragment } from 'react';
import { getSession } from 'next-auth/react';
import UserProfile from '../components/UserProfilePage/UserProfile';

const UserProfilePage = () => {
  return (
    <Fragment>
      <UserProfile />
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

export default UserProfilePage;
