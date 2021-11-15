import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import useStore from '../../../store/store';
import classes from './EpisodeStatus.module.scss';

const EpisodeStatus = ({ seasonNumber, episode }) => {
  const { shows, setShows } = useStore();
  const router = useRouter();

  const show = shows.find((s) => s.id == router.query.showid);

  let isEpisodeWatched;
  if (show) {
    isEpisodeWatched = show.seasons
      .find((s) => s.season_number == seasonNumber)
      .episodes.find((e) => e.id == episode.id).isWatched;
  }

  const clickHandler = async () => {
    if (isEpisodeWatched) {
      show.seasons
        .find((s) => s.season_number == seasonNumber)
        .episodes.find((e) => e.id == episode.id).isWatched = false;
      show.episodesWatched--;
    } else {
      show.seasons
        .find((s) => s.season_number == seasonNumber)
        .episodes.find((e) => e.id == episode.id).isWatched = true;
      show.episodesWatched++;
    }
    const updatedShows = [...shows.filter((s) => s.id !== show.id), show];
    setShows(updatedShows);

    const result = await fetch('/api/shows/episode-status', {
      method: 'PUT',
      body: JSON.stringify({ updatedShows }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <p
      className={isEpisodeWatched ? classes.watched : classes['not-watched']}
      onClick={clickHandler}>
      {isEpisodeWatched ? 'Watched' : 'Not Watched'}
    </p>
  );
};

export default EpisodeStatus;
