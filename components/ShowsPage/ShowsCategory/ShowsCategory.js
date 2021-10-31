import React from 'react';
import { useRouter } from 'next/router';
import classes from './ShowsCategory.module.scss';
import { imgUrl } from '../../../lib/helpers';
import ShowPoster from '../../UI/ShowPoster/ShowPoster';

const ShowsCategory = ({ category, data }) => {
  const router = useRouter();
  const clickHandler = (id) => {
    router.push(`/shows/${id}`);
  };
  return (
    <div className={classes.category}>
      <h2>{category}</h2>
      <div className={classes.shows}>
        {data.map((show) => (
          <ShowPoster
            src={`${imgUrl}${show.poster_path}`}
            key={show.id}
            alt={show.name}
            width={180}
            height={250}
            onClick={() => clickHandler(show.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowsCategory;
