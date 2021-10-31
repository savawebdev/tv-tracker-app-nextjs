import React, { Fragment } from 'react';
import Shows from '../../components/ShowsPage/Shows';

const ShowsPage = ({ topRated }) => {
  return (
    <Fragment>
      <Shows topRated={topRated} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  try {
    const apiKey = process.env.TMDB_API_KEY;
    const result = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
    const topRated = await result.json();

    console.log(topRated);

    return {
      props: {
        topRated: topRated.results,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default ShowsPage;
