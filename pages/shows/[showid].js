import React, { Fragment, useState } from 'react';
import ShowInfo from '../../components/ShowInfoPage/ShowInfo';
import ShowNav from '../../components/ShowInfoPage/ShowNav/ShowNav';
import ShowSeasons from '../../components/ShowInfoPage/ShowSeasons/ShowSeasons';
import ShowEpisodes from '../../components/ShowInfoPage/ShowEpisodes/ShowEpisodes';
import ShowCast from '../../components/ShowInfoPage/ShowCast/ShowCast';

const ShowInfoPage = ({ data, seasons }) => {
  const [tab, setTab] = useState('seasons');

  const setTabHandler = (newTab) => {
    setTab(newTab);
  };
  return (
    <Fragment>
      <ShowInfo show={data} />
      <ShowNav showId={data.id} onSetTab={setTabHandler} />
      {tab === 'seasons' && <ShowSeasons seasons={data.seasons} />}
      {tab === 'episodes' && (
        <ShowEpisodes showId={data.id} seasons={data.seasons} />
      )}
      {tab === 'cast' && <ShowCast />}
    </Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const showId = context.params.showid;
  const apiKey = process.env.TMDB_API_KEY;

  const result = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}?api_key=${apiKey}&language=en-US`
  );
  const data = await result.json();

  // Fetch Seasons
  const seasons = [];

  for (const season in data.seasons) {
    const seasonResult = await fetch(
      `https://api.themoviedb.org/3/tv/${data.id}/season/${season.season_number}?api_key=${apiKey}&language=en-US`
    );
    const seasonData = await seasonResult.json();
    seasons.push(seasonData);
  }

  return {
    props: {
      data,
      seasons,
    },
  };
};

export default ShowInfoPage;
