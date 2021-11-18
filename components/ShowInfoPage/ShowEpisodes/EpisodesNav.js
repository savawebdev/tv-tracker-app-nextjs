import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from './EpisodesNav.module.scss';

const EpisodesNav = ({ seasons, onSetSeasonNumber }) => {
  const router = useRouter();
  const showId = router.query.showid;

  return (
    <nav className={classes['episodes-nav']}>
      {seasons.map((season) => (
        <Link key={season.id} href={`/shows/${showId}`}>
          <a
            className={classes['episodes-nav-link']}
            onClick={() => onSetSeasonNumber(season.season_number)}>
            S{season.season_number}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default EpisodesNav;
