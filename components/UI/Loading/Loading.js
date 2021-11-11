import React from 'react';
import classes from './Loading.module.scss';

const Loading = () => {
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

export default Loading;
