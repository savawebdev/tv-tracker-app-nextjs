import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useStore from '../../../store/store';
import { imgUrl } from '../../../lib/helpers';
import classes from './EpisodeCard.module.scss';

import Card from '../../UI/Card/Card';
import EpisodeStatus from './EpisodeStatus';

const EpisodeCard = ({ episode, seasonNumber }) => {
  const { shows, setShows } = useStore();
  const router = useRouter();

  const show = shows.find((s) => s.id == router.query.showid);

  const episodeOverview =
    episode.overview === ''
      ? 'No summary available for this episode'
      : episode.overview;

  let img;
  if (episode.still_path) {
    img = `${imgUrl}${episode.still_path}`;
  } else
    img =
      'https://via.placeholder.com/250x150/eaf6ff/058ed9?text=TV+Tracker+App';

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
          <span>Air Date: {episode.air_date}</span>
        </h3>
        <p>{episodeOverview}</p>
        {show && seasonNumber !== 0 && (
          <EpisodeStatus seasonNumber={seasonNumber} episode={episode} />
        )}
      </div>
    </Card>
  );
};

export default EpisodeCard;
