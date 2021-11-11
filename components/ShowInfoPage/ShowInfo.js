import React from 'react';
import Image from 'next/image';
import useStore from '../../store/store';
import { imgUrl } from '../../lib/helpers';
import classes from './ShowInfo.module.scss';

const ShowInfo = ({ show }) => {
  const { shows, addShow, removeShow } = useStore();

  const firstAirYear = show.first_air_date.slice(0, 4);
  const genres = show.genres.map((genre) => genre.name).join(', ');
  const creators = show.created_by.map((creator) => creator.name).join(', ');
  const isShowAdded = shows.find((s) => s.id === show.id);

  const clickHandler = async () => {
    if (isShowAdded) {
      const result = await fetch('/api/shows/remove-show', {
        method: 'DELETE',
        body: JSON.stringify({ id: show.id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      removeShow(show.id);
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
          {isShowAdded ? 'Remove' : 'Add'}
        </button>
      </div>
    </div>
  );
};

export default ShowInfo;
