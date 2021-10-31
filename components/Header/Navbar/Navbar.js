import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';
import { useRouter } from 'next/router';
import classes from './Navbar.module.scss';

const Navbar = () => {
  const router = useRouter();
  const [session, loading] = useSession();

  const logoutHandler = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/' });

    router.push(data.url);
  };

  if (!session) {
    return (
      <nav className={classes.nav}>
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
      <Link href='/shows'>
        <a className={classes['nav-link']}>Shows</a>
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
