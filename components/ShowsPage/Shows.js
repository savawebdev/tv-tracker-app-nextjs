import React, { Fragment } from 'react';
import PageTitle from '../UI/PageTitle/PageTitle';
import ShowsCategory from './ShowsCategory/ShowsCategory';

const Shows = ({ topRated, airingTonight, trendingShows }) => {
  return (
    <Fragment>
      <PageTitle label='Discover Shows' />
      <ShowsCategory category='Trending This Week' data={trendingShows} />
      <ShowsCategory category='Top Rated' data={topRated} />
      <ShowsCategory category='Airing Tonight' data={airingTonight} />
    </Fragment>
  );
};

export default Shows;
