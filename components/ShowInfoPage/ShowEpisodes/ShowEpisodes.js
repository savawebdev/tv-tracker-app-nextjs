import React, { Fragment, useState } from 'react';
import useSWR from 'swr';
import useStore from '../../../store/store';
import classes from './ShowEpisodes.module.scss';
import EpisodesNav from './EpisodesNav';
import Episodes from './Episodes';
import LoadingSpinner from '../../UI/Loading/LoadingSpinner';
import SeasonStatus from './SeasonStatus';

const fetcher = (url) => fetch(url).then((res) => res.json());

const ShowEpisodes = ({ seasons, showId }) => {
  const [seasonNumber, setSeasonNumber] = useState('1');
  const { shows, loading } = useStore();

  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/tv/${showId}/season/${seasonNumber}?api_key=${apiKey}&language=en-US`,
    fetcher
  );

  const setSeasonNumberHandler = (string) => {
    setSeasonNumber(string);
  };

  const show = (shows || []).find((s) => s.id === showId);

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
            <SeasonStatus showId={showId} seasonNumber={seasonNumber} />
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
