import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/client';
import { imgUrl } from '../../lib/helpers';
import classes from './ShowInfo.module.scss';
import AddRemoveShow from './AddRemoveShow/AddRemoveShow';

const ShowInfo = ({ show }) => {
  const [session, loading] = useSession();

  const firstAirYear = show.first_air_date.slice(0, 4);
  const genres = show.genres.map((genre) => genre.name).join(', ');
  const creators = show.created_by.map((creator) => creator.name).join(', ');

  let img;
  if (show.backdrop_path) {
    img = `${imgUrl}${show.backdrop_path}`;
  } else img = 'https://via.placeholder.com/250x150/eaf6ff?text=+';

  return (
    <div className={classes.backdrop}>
      <Image src={img} alt={show.name} layout='fill' />

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

        {session && <AddRemoveShow show={show} />}
      </div>
    </div>
  );
};

export default ShowInfo;
