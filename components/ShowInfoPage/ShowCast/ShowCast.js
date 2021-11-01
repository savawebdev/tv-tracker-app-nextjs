import React, { Fragment } from 'react';
import classes from './ShowCast.module.scss';
import Cast from './Cast';

const ShowCast = ({ showCast }) => {
  return (
    <Fragment>
      <Cast cast={showCast} />
    </Fragment>
  );
};

export default ShowCast;
