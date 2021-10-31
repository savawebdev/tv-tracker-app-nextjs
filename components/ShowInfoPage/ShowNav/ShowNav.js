import React from 'react';
import Link from 'next/link';
import classes from './ShowNav.module.scss';

const ShowNav = ({ showId, onSetTab }) => {
  return (
    <nav className={classes['show-nav']}>
      <Link href={`/shows/${showId}`}>
        <a
          className={classes['show-nav-link']}
          onClick={() => onSetTab('seasons')}>
          Seasons
        </a>
      </Link>
      <Link href={`/shows/${showId}`}>
        <a
          className={classes['show-nav-link']}
          onClick={() => onSetTab('episodes')}>
          Episodes
        </a>
      </Link>
      <Link href={`/shows/${showId}`}>
        <a
          className={classes['show-nav-link']}
          onClick={() => onSetTab('cast')}>
          Cast
        </a>
      </Link>
    </nav>
  );
};

export default ShowNav;
