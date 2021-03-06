import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import classes from './Navbar.module.scss';

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const logoutHandler = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/' });

    router.push(data.url);
  };

  if (status !== 'authenticated') {
    return (
      <nav className={classes.nav}>
        <Link href='/shows'>
          <a className={classes['nav-link']}>Shows</a>
        </Link>
        <Link href='/login'>
          <a className={classes['nav-link']}>Login</a>
        </Link>
        <Link href='/register'>
          <a className={classes['nav-link']}>Register</a>
        </Link>
      </nav>
    );
  }

  return (
    <nav className={classes.nav}>
      <Link href='/shows/search'>
        <a className={classes['nav-link']}>Search</a>
      </Link>
      <Link href='/shows'>
        <a className={classes['nav-link']}>Shows</a>
      </Link>
      <Link href='/shows/myshows'>
        <a className={classes['nav-link']}>My Shows</a>
      </Link>
      <Link href='/userprofile'>
        <a className={classes['nav-link']}>My Profile</a>
      </Link>
      <Link href='/'>
        <a className={classes['nav-link']} onClick={logoutHandler}>
          Logout
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
