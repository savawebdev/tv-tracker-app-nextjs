import React from 'react';
import Image from 'next/image';
import classes from './ShowPoster.module.scss';

const ShowPoster = ({ key, alt, src, width, height }) => {
  return (
    <div className={classes.container}>
      <Image
        className={classes['show-poster']}
        key={key}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ShowPoster;
