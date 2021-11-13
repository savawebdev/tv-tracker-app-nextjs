import React, { Fragment } from 'react';
import { fetchData } from '../../lib/helpers';
import Shows from '../../components/ShowsPage/Shows';

const ShowsPage = ({ topRated, airingTonight, trendingShows }) => {
  return (
    <Fragment>
      <Shows
        topRated={topRated}
        airingTonight={airingTonight}
        trendingShows={trendingShows}
      />
    </Fragment>
  );
};

export const getServerSideProps = async () => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    const topRated = await fetchData(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );

    const airingTonight = await fetchData(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`
    );

    const trendingShows = await fetchData(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`
    );

    return {
      props: {
        topRated: topRated.results,
        airingTonight: airingTonight.results,
        trendingShows: trendingShows.results,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default ShowsPage;
