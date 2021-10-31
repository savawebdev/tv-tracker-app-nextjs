import React from 'react';
import Image from 'next/image';
import classes from './ShowsCategory.module.scss';
import { imgUrl } from '../../../lib/helpers';
import ShowPoster from '../../UI/ShowPoster/ShowPoster';

const ShowsCategory = ({ category, data }) => {
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
          />
          //   <Image
          //     className={classes['show-img']}
          //     src={`${imgUrl}${show.poster_path}`}
          //     key={show.id}
          //     alt={show.name}
          //     width={180}
          //     height={250}
          //   />
        ))}
      </div>
    </div>
  );
};

export default ShowsCategory;
