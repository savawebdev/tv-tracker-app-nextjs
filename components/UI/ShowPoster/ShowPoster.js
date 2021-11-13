import React from 'react';
import Image from 'next/image';
import { imgUrl } from '../../../lib/helpers';
import classes from './ShowPoster.module.scss';

const ShowPoster = ({ alt, src, width, height, onClick, show }) => {
  let imgSrc;
  if (show.poster_path) {
    imgSrc = `${imgUrl}${show.poster_path}`;
  } else {
    imgSrc = `https://place-hold.it/180x250/eaf6ff/058ed9?text=${show.name}&fontsize=8`;
  }
  return (
    <div className={classes.container}>
      <Image
        className={classes['show-poster']}
        src={imgSrc}
        alt={show.id}
        width={180}
        height={250}
        onClick={onClick}
      />
    </div>
  );
};

export default ShowPoster;
