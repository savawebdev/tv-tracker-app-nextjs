import React, { Fragment, useState, useEffect } from 'react';
import useSWR from 'swr';
import useStore from '../../../store/store';
import classes from './ShowEpisodes.module.scss';
import EpisodesNav from './EpisodesNav';
import Episodes from './Episodes';
import LoadingSpinner from '../../UI/Loading/LoadingSpinner';

const fetcher = (url) => fetch(url).then((res) => res.json());

const ShowEpisodes = ({ seasons, showId }) => {
  const [seasonNumber, setSeasonNumber] = useState('1');
  const { shows, setShows, loading, setLoading } = useStore();

  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/tv/${showId}/season/${seasonNumber}?api_key=${apiKey}&language=en-US`,
    fetcher
  );

  const setSeasonNumberHandler = (string) => {
    setSeasonNumber(string);
  };

  const show = shows.find((s) => s.id === showId);

  let isSeasonWatched = false;
  if (show !== {}) {
    isSeasonWatched = show.seasons
      .find((s) => s.season_number == seasonNumber)
      .episodes.every((e) => e.isWatched === true);
  }

  //Mark Entire Season As Watched
  const clickHandler = async () => {
    setLoading();
    const season = show.seasons.find((s) => s.season_number == seasonNumber);
    console.log(show);
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
    <Fragment>
      <div>
        <EpisodesNav
          seasons={seasons}
          onSetSeasonNumber={setSeasonNumberHandler}
        />
      </div>
      {show && (
        <div className={classes['btn-container']}>
          {loading ? (
            <LoadingSpinner color='white' size='small' />
          ) : (
            <button
              onClick={clickHandler}
              className={classes['mark-season-btn']}>
              {isSeasonWatched
                ? 'Mark season as not watched'
                : 'Mark season as watched'}
            </button>
          )}
        </div>
      )}
      <div>
        <Episodes season={data} />
      </div>
    </Fragment>
  );
};

export default ShowEpisodes;
