import React, { Fragment, useState } from 'react';
import useSWR from 'swr';

import EpisodesNav from './EpisodesNav';
import Episodes from './Episodes';

const fetcher = (url) => fetch(url).then((res) => res.json());

const ShowEpisodes = ({ seasons, showId }) => {
  const [seasonNumber, setSeasonNumber] = useState('1');

  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/tv/${showId}/season/${seasonNumber}?api_key=${apiKey}&language=en-US`,
    fetcher
  );

  const setSeasonNumberHandler = (string) => {
    setSeasonNumber(string);
  };

  return (
    <Fragment>
      <div>
        <EpisodesNav
          seasons={seasons}
          onSetSeasonNumber={setSeasonNumberHandler}
        />
      </div>
      <div>
        <Episodes season={data} />
      </div>
    </Fragment>
  );
};

export default ShowEpisodes;
