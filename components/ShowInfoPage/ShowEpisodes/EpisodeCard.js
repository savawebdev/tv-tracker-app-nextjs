import React from 'react';
import Image from 'next/image';
import { imgUrl } from '../../../lib/helpers';
import classes from './EpisodeCard.module.scss';

import Card from '../../UI/Card/Card';

const EpisodeCard = ({ episode }) => {
  const img = `${imgUrl}${episode.still_path}`;

  const episodeOverview =
    episode.overview === ''
      ? 'No summary available for this episode'
      : episode.overview;

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
        <p>{episodeOverview}</p>
      </div>
    </Card>
  );
};

export default EpisodeCard;
