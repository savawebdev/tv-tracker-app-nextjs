import React from 'react';
import classes from './LoadingComponent.module.scss';

const LoadingComponent = () => {
  return (
    <div className={classes.loading}>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
    </div>
  );
};

export default LoadingComponent;
