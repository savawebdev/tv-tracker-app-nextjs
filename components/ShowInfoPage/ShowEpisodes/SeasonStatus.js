import React from 'react';
import classes from './SeasonStatus.module.scss';
import useStore from '../../../store/store';

const SeasonStatus = ({ showId, seasonNumber }) => {
  const { shows, setShows, setLoading } = useStore();

  const show = shows.find((s) => s.id === showId);

  let isSeasonWatched = false;
  if (show !== {}) {
    isSeasonWatched = show.seasons
      .find((s) => s.season_number == seasonNumber)
      .episodes.every((e) => e.isWatched === true);
  }

  const clickHandler = async () => {
    setLoading();
    const season = show.seasons.find((s) => s.season_number == seasonNumber);

    if (isSeasonWatched) {
      season.episodes.forEach((e) => {
        e.isWatched = false;
      });
      show.episodesWatched -= season.episodes.length;
    } else {
      season.episodes.forEach((e) => {
        e.isWatched = true;
      });
      show.episodesWatched += season.episodes.length;
    }

    const seasons = [
      ...show.seasons.filter((s) => s.season_number != seasonNumber),
      season,
    ];

    const updatedShow = { ...show, seasons };
    const updatedShows = [...shows.filter((s) => s.id !== showId), updatedShow];
    setShows(updatedShows);

    const result = await fetch('/api/shows/episode-status', {
      method: 'PUT',
      body: JSON.stringify({ updatedShows }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setLoading();
  };

  return (
    <button onClick={clickHandler} className={classes['mark-season-btn']}>
      {isSeasonWatched
        ? 'Mark season as not watched'
        : 'Mark season as watched'}
    </button>
  );
};

export default SeasonStatus;
