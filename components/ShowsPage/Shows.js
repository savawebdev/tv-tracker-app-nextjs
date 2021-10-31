import React, { Fragment } from 'react';
import classes from './Shows.module.scss';
import ShowsCategory from './ShowsCategory/ShowsCategory';

const Shows = ({ topRated }) => {
  return (
    <Fragment>
      <h1>Discover Shows</h1>
      <ShowsCategory category='Top Rated' data={topRated} />
    </Fragment>
  );
};

export default Shows;
