import React, { Fragment } from 'react';
import classes from './Shows.module.scss';
import ShowsCategory from './ShowsCategory/ShowsCategory';

const Shows = ({ topRated, airingTonight, trendingShows }) => {
  return (
    <Fragment>
      <h1>Discover Shows</h1>
      <ShowsCategory category='Trending This Week' data={trendingShows} />
      <ShowsCategory category='Top Rated' data={topRated} />
      <ShowsCategory category='Airing Tonight' data={airingTonight} />
    </Fragment>
  );
};

export default Shows;
