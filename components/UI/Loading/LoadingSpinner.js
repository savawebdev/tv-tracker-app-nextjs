import React from 'react';
import classes from './LoadingSpinner.module.scss';

const LoadingSpinner = ({ color, size }) => {
  return (
    <div
      className={`${classes['loading-spinner']} ${classes[color]} ${classes[size]}`}></div>
  );
};

export default LoadingSpinner;
