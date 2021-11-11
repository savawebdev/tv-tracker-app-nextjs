import React, { Fragment } from 'react';
import { fetchData } from '../lib/helpers';
import PopularShows from '../components/HomePage/PopularShows/PopularShows';

const HomePage = ({ data }) => {
  return (
    <Fragment>
      <PopularShows shows={data.results} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const data = await fetchData(
    `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
  );

  return {
    props: {
      data,
    },
  };
};

export default HomePage;
