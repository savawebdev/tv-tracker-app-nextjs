import React from 'react';
import Link from 'next/link';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <Link href='/login'>
        <a className={classes['nav-link']}>Login</a>
      </Link>
      <Link href='/register'>
        <a className={classes['nav-link']}>Register</a>
      </Link>
      {/* <Link href='/'>
        <a className={classes['nav-link']}>Shows</a>
      </Link>
      <Link href='/'>
        <a className={classes['nav-link']}>Logout</a>
      </Link> */}
    </nav>
  );
};

export default Navbar;
