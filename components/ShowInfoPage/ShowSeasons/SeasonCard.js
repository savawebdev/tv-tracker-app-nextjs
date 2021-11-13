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

  let img;
  if (season.poster_path) {
    img = `${imgUrl}${season.poster_path}`;
  } else
    img =
      'https://via.placeholder.com/180x250/eaf6ff/058ed9?text=TV+Tracker+App';

  return (
    <Card>
      <Image
        src={img}
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
