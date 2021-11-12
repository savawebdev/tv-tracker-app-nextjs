import React, { Fragment, useEffect } from 'react';
import Link from 'next/link';
import classes from './MyShows.module.scss';
import useStore from '../../store/store';
import { fetchData } from '../../lib/helpers';

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
            <tr key={show.id}>
              <td>
                <Link href={`/shows/${show.id}`}>
                  <a className={classes['show-link']}>{show.name}</a>
                </Link>
              </td>
              <td>{show.status}</td>
              <td>120/120</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default MyShows;
