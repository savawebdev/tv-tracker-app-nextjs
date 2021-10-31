import React from 'react';
import Image from 'next/image';
import { imgUrl } from '../../lib/helpers';
import classes from './ShowInfo.module.scss';

const ShowInfo = ({ data }) => {
  return (
    <div className={classes.backdrop}>
      <Image
        src={`${imgUrl}${data.backdrop_path}`}
        alt={data.name}
        layout='fill'
      />
    </div>
  );
};

export default ShowInfo;
