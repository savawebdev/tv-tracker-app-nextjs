import React from 'react';
import classes from './ShowsContainer.module.scss';
const ShowsContainer = ({ children }) => {
  return <div className={classes['shows']}>{children}</div>;
};

export default ShowsContainer;
