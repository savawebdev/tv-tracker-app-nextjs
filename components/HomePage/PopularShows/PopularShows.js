import React, { Fragment } from 'react';
import Image from 'next/image';
import classes from './PopularShows.module.scss';

const PopularShows = ({ shows }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/original';
  return (
    <Fragment>
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
