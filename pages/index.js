import React, { Fragment } from 'react';
import PopularShows from '../components/HomePage/PopularShows/PopularShows';

const HomePage = ({ data }) => {
  return (
    <Fragment>
      <PopularShows shows={data.results} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  try {
    const apiKey = process.env.TMDB_API_KEY;

    const result = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    const data = await result.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default HomePage;
