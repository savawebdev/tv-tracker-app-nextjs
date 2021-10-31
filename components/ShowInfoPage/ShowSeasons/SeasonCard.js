import React from 'react';
import Image from 'next/image';
import { imgUrl } from '../../../lib/helpers';
import classes from './SeasonCard.module.scss';

import Card from '../../UI/Card/Card';

const SeasonCard = ({ season }) => {
  const seasonOverview =
    season.overview === ''
      ? 'No summary available for this season'
      : season.overview;

  return (
    <Card>
      <Image
        src={`${imgUrl}${season.poster_path}`}
        alt=''
        className={classes['season-img']}
        width={180}
        height={250}
      />
      <div className={classes['season-info']}>
        <h3>{season.name}</h3>
        <p>{seasonOverview}</p>
      </div>
    </Card>
  );
};

export default SeasonCard;
