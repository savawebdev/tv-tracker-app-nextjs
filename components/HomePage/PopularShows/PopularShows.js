import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import classes from './PopularShows.module.scss';
import CTAButton from '../CTAButton/CTAButton';
import ShowPoster from '../../UI/ShowPoster/ShowPoster';
import ShowsContainer from '../../UI/ShowsContainer/ShowsContainer';
import PageTitle from '../../UI/PageTitle/PageTitle';

const PopularShows = ({ shows }) => {
  const router = useRouter();
  const clickHandler = (id) => {
    router.push(`/shows/${id}`);
  };

  return (
    <Fragment>
      <PageTitle label='Popular Shows' />
      {shows && (
        <ShowsContainer>
          {shows.map((show) => (
            <ShowPoster
              key={show.id}
              show={show}
              onClick={() => clickHandler(show.id)}
            />
          ))}
        </ShowsContainer>
      )}
      <CTAButton />
    </Fragment>
  );
};

export default PopularShows;
