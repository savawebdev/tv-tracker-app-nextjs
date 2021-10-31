import React, { Fragment } from 'react';
import { useSession } from 'next-auth/client';
import Image from 'next/image';
import { imgUrl } from '../../../lib/helpers';
import classes from './PopularShows.module.scss';
import CTAButton from '../CTAButton/CTAButton';

const PopularShows = ({ shows }) => {
  const [session, loading] = useSession();

  return (
    <Fragment>
      {!session && <CTAButton />}
      <h1>Popular Shows</h1>
      {shows && (
        <div className={classes['popular-shows']}>
          {shows.map((show) => (
            <Image
              className={classes['show-img']}
              src={`${imgUrl}${show.poster_path}`}
              key={show.id}
              alt={show.name}
              width={180}
              height={250}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default PopularShows;
