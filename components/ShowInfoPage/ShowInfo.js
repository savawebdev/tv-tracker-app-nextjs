import React from 'react';
import Image from 'next/image';
import { imgUrl } from '../../lib/helpers';
import classes from './ShowInfo.module.scss';

const ShowInfo = ({ show }) => {
  const firstAirYear = show.first_air_date.slice(0, 4);
  const genres = show.genres.map((genre) => genre.name).join(', ');
  const creators = show.created_by.map((creator) => creator.name).join(', ');

  return (
    <div className={classes.backdrop}>
      <Image
        src={`${imgUrl}${show.backdrop_path}`}
        alt={show.name}
        layout='fill'
      />

      <div className={classes.info}>
        <h1>
          {show.name} <span>({firstAirYear})</span>
        </h1>
        <p className={classes.genres}>
          <em>{genres}</em>
        </p>
        <p className={classes.overview}>{show.overview}</p>
        <p>
          Created By: <strong>{creators}</strong>
        </p>
      </div>
    </div>
  );
};

export default ShowInfo;
