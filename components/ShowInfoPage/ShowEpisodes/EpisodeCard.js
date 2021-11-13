import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useStore from '../../../store/store';
import { imgUrl } from '../../../lib/helpers';
import classes from './EpisodeCard.module.scss';

import Card from '../../UI/Card/Card';

const EpisodeCard = ({ episode, seasonNumber }) => {
  const img = `${imgUrl}${episode.still_path}`;
  const { shows, setShows } = useStore();
  const router = useRouter();

  const show = shows.find((s) => s.id == router.query.showid);

  let isEpisodeWatched;
  if (show) {
    isEpisodeWatched = show.seasons
      .find((s) => s.season_number == seasonNumber)
      .episodes.find((e) => e.id == episode.id).isWatched;
  }

  const episodeOverview =
    episode.overview === ''
      ? 'No summary available for this episode'
      : episode.overview;

  const clickHandler = async () => {
    if (isEpisodeWatched) {
      show.seasons
        .find((s) => s.season_number == seasonNumber)
        .episodes.find((e) => e.id == episode.id).isWatched = false;
      show.episodesWatched--;
    } else {
      show.seasons
        .find((s) => s.season_number == seasonNumber)
        .episodes.find((e) => e.id == episode.id).isWatched = true;
      show.episodesWatched++;
    }
    const updatedShows = [...shows.filter((s) => s.id !== show.id), show];
    setShows(updatedShows);

    const result = await fetch('/api/shows/episode-status', {
      method: 'PUT',
      body: JSON.stringify({ updatedShows }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

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
        {show && (
          <Fragment>
            <p
              className={
                isEpisodeWatched ? classes.watched : classes['not-watched']
              }>
              {isEpisodeWatched ? 'Watched' : 'Not Watched'}
            </p>
            <button className={classes['watched-btn']} onClick={clickHandler}>
              {isEpisodeWatched ? 'Mark as not watched' : 'Mark as watched'}
            </button>
          </Fragment>
        )}
      </div>
    </Card>
  );
};

export default EpisodeCard;
