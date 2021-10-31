import React from 'react';
import { useRouter } from 'next/router';
import classes from './CTAButton.module.scss';

const CTAButton = () => {
  const router = useRouter();

  const ctaHandler = () => {
    router.push('/login');
  };
  return (
    <button className={classes['cta-button']} onClick={ctaHandler}>
      Start Tracking!
    </button>
  );
};

export default CTAButton;
