import React, { Fragment, useEffect } from 'react';
import classes from './MyShows.module.scss';
import useStore from '../../store/store';
import { imgUrl, fetchData } from '../../lib/helpers';
import ShowPoster from '../UI/ShowPoster/ShowPoster';

const MyShows = () => {
  const { shows, setShows } = useStore();

  useEffect(() => {
    fetchData('/api/shows/get-shows').then((res) => setShows(res.shows));
  }, [setShows]);

  return (
    <Fragment>
      <h1>My Shows</h1>
      <div className={classes.shows}>
        {shows.map((show) => (
          <ShowPoster
            src={`${imgUrl}${show.poster_path}`}
            key={show.id}
            alt={show.name}
            width={180}
            height={250}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default MyShows;
