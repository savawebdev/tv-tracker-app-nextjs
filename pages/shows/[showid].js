import React, { Fragment, useState } from 'react';
import { fetchData } from '../../lib/helpers';
import ShowInfo from '../../components/ShowInfoPage/ShowInfo';
import ShowNav from '../../components/ShowInfoPage/ShowNav/ShowNav';
import ShowSeasons from '../../components/ShowInfoPage/ShowSeasons/ShowSeasons';
import ShowEpisodes from '../../components/ShowInfoPage/ShowEpisodes/ShowEpisodes';
import ShowCast from '../../components/ShowInfoPage/ShowCast/ShowCast';

const ShowInfoPage = ({ showData, showCast }) => {
  const [tab, setTab] = useState('seasons');

  const setTabHandler = (newTab) => {
    setTab(newTab);
  };
  return (
    <Fragment>
      <ShowInfo show={showData} />
      <ShowNav showId={showData.id} onSetTab={setTabHandler} />
      {tab === 'seasons' && <ShowSeasons seasons={showData.seasons} />}
      {tab === 'episodes' && (
        <ShowEpisodes showId={showData.id} seasons={showData.seasons} />
      )}
      {tab === 'cast' && <ShowCast showCast={showCast.cast} />}
    </Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const showId = context.params.showid;
  const apiKey = process.env.TMDB_API_KEY;

  const showData = await fetchData(
    `https://api.themoviedb.org/3/tv/${showId}?api_key=${apiKey}&language=en-US`
  );

  const showCast = await fetchData(
    `https://api.themoviedb.org/3/tv/${showData.id}/aggregate_credits?api_key=${apiKey}&language=en-US`
  );

  return {
    props: {
      showData,
      showCast,
    },
  };
};

export default ShowInfoPage;
