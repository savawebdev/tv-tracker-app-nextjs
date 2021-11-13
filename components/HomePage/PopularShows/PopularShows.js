import React, { Fragment } from 'react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { imgUrl } from '../../../lib/helpers';
import classes from './PopularShows.module.scss';
import CTAButton from '../CTAButton/CTAButton';
import ShowPoster from '../../UI/ShowPoster/ShowPoster';

const PopularShows = ({ shows }) => {
  const [session, loading] = useSession();
  const router = useRouter();
  const clickHandler = (id) => {
    router.push(`/shows/${id}`);
  };

  return (
    <Fragment>
      <h1>Popular Shows</h1>
      {shows && (
        <div className={classes['popular-shows']}>
          {shows.map((show) => (
            <ShowPoster
              key={show.id}
              show={show}
              onClick={() => clickHandler(show.id)}
            />
          ))}
        </div>
      )}
      {!session && <CTAButton />}
    </Fragment>
  );
};

export default PopularShows;
