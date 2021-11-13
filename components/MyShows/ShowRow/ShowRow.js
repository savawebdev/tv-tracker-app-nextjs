import React from 'react';
import Link from 'next/link';
import classes from './ShowRow.module.scss';

const ShowRow = ({ show }) => {
  let totalEpisodes = 0;

  for (const season of show.seasons) {
    if (season.season_number === 0) {
      continue;
    }

    for (const episode of season.episodes) {
      totalEpisodes++;
    }
  }
  return (
    <tr>
      <td>
        <Link href={`/shows/${show.id}`}>
          <a className={classes['show-link']}>{show.name}</a>
        </Link>
      </td>
      <td>{show.status}</td>
      <td>
        {show.episodesWatched}/{totalEpisodes}
      </td>
    </tr>
  );
};

export default ShowRow;
