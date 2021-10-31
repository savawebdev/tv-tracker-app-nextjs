import React from 'react';
import Image from 'next/image';
import { imgUrl } from '../../../lib/helpers';
import classes from './EpisodeCard.module.scss';

import Card from '../../UI/Card/Card';

const EpisodeCard = ({ episode }) => {
  const img = `${imgUrl}${episode.still_path}`;

  return (
    <Card>
      <Image
        src={img}
        alt=''
        className={classes['episode-img']}
        width={250}
        height={150}
      />
      <div className={classes['episode-info']}>
        <h3>
          {episode.episode_number} - {episode.name}
        </h3>
        <p>{episode.overview}</p>
      </div>
    </Card>
  );
};

export default EpisodeCard;
