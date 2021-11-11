import React from 'react';
import Image from 'next/image';
import classes from './ShowPoster.module.scss';

const ShowPoster = ({ alt, src, width, height, onClick }) => {
  return (
    <div className={classes.container}>
      <Image
        className={classes['show-poster']}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={onClick}
      />
    </div>
  );
};

export default ShowPoster;
