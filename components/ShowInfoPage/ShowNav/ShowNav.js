import React from 'react';
import Link from 'next/link';
import classes from './ShowNav.module.scss';

const ShowNav = ({ showId }) => {
  return (
    <nav className={classes['show-nav']}>
      <Link href={`/shows/${showId}`}>
        <a className={classes['show-nav-link']}>Seasons</a>
      </Link>
      <Link href={`/shows/${showId}`}>
        <a className={classes['show-nav-link']}>Episodes</a>
      </Link>
      <Link href={`/shows/${showId}`}>
        <a className={classes['show-nav-link']}>Cast</a>
      </Link>
    </nav>
  );
};

export default ShowNav;
