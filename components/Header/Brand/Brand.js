import React from 'react';
import Link from 'next/link';
import classes from './Brand.module.scss';

const Brand = () => {
  return (
    <Link href='/' passHref>
      <a className={classes.brand}>TV Tracker App</a>
    </Link>
  );
};

export default Brand;
