import React from 'react';
import Link from 'next/link';
import classes from './Brand.module.scss';

const Brand = () => {
  return (
    <Link href='/' passHref>
      <h1 className={classes.brand}>TV Tracker App</h1>
    </Link>
  );
};

export default Brand;
