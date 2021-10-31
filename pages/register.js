import React, { Fragment } from 'react';
import { getSession } from 'next-auth/client';
import RegisterForm from '../components/RegisterPage/RegisterForm';

const RegisterPage = () => {
  return (
    <Fragment>
      <RegisterForm />
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

export default RegisterPage;
