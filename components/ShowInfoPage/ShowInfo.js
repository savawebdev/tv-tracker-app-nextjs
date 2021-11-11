import React from 'react';
import Image from 'next/image';
import useStore from '../../store/store';
import { imgUrl } from '../../lib/helpers';
import classes from './ShowInfo.module.scss';

const ShowInfo = ({ show }) => {
  const { shows, addShow } = useStore();

  const firstAirYear = show.first_air_date.slice(0, 4);
  const genres = show.genres.map((genre) => genre.name).join(', ');
  const creators = show.created_by.map((creator) => creator.name).join(', ');

  const clickHandler = async () => {
    if (shows.find((s) => s.id === show.id)) {
      window.alert('Show already added');
      return;
    }

    const result = await fetch('/api/shows/add-show', {
      method: 'POST',
      body: JSON.stringify({ show }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    addShow(show);
  };

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

        <button className={classes['add-btn']} onClick={clickHandler}>
          Add
        </button>
      </div>
    </div>
  );
};

export default ShowInfo;
