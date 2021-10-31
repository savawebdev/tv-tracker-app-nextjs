import React from 'react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import classes from './CTAButton.module.scss';

const CTAButton = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  const ctaHandler = () => {
    if (session) {
      router.push('/shows');
    } else {
      router.push('/login');
    }
  };
  return (
    <button className={classes['cta-button']} onClick={ctaHandler}>
      Start Tracking!
    </button>
  );
};

export default CTAButton;
