import React from 'react';
import classes from './Label.module.scss';

const Label = ({ label, htmlFor }) => {
  return (
    <label className={classes.label} htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default Label;
