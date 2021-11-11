import React from 'react';
import classes from './FormControl.module.scss';

const FormControl = ({ children }) => {
  return <div className={classes['form-control']}>{children}</div>;
};

export default FormControl;
