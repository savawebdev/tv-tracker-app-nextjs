import React, { Fragment } from 'react';
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

export const getStaticProps = async () => {
  try {
    const apiKey = process.env.TMDB_API_KEY;

    // Fetch Top Rated Shows
    const result = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
    const topRated = await result.json();

    // Fetch Airing Tonight Shows
    const airingResult = await fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`
    );
    const airingTonight = await airingResult.json();

    // Fetch Trending Shows
    const trendingResult = await fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`
    );
    const trendingShows = await trendingResult.json();

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
