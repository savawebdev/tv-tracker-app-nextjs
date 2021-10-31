import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import ShowInfo from '../../components/ShowInfoPage/ShowInfo';

const ShowInfoPage = ({ data }) => {
  return (
    <Fragment>
      <ShowInfo data={data} />
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

  return {
    props: {
      data,
    },
  };
};

export default ShowInfoPage;
