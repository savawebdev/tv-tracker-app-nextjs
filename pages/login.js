import React, { Fragment } from 'react';
import { getSession } from 'next-auth/client';
import LoginForm from '../components/LoginPage/LoginForm';

const LoginPage = () => {
  return (
    <Fragment>
      <LoginForm />
    </Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/userprofile',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default LoginPage;
