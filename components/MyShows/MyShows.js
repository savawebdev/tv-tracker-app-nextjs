import React, { Fragment, useEffect } from 'react';
import classes from './MyShows.module.scss';
import useStore from '../../store/store';
import { fetchData } from '../../lib/helpers';
import ShowRow from './ShowRow/ShowRow';

const MyShows = () => {
  const { shows, setShows } = useStore();

  useEffect(() => {
    fetchData('/api/shows/get-shows').then((res) => setShows(res.shows));
  }, [setShows]);

  return (
    <Fragment>
      <h1>My Shows</h1>
      <table className={classes.shows}>
        <thead>
          <tr>
            <td>Show</td>
            <td>Status</td>
            <td>Episodes</td>
          </tr>
        </thead>
        <tbody>
          {shows.map((show) => (
            <ShowRow key='show.id' show={show} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default MyShows;
