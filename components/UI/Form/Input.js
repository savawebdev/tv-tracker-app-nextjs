import React from 'react';
import classes from './Input.module.scss';

const Input = (args) => {
  return <input className={classes.input} {...args} />;
};

export default Input;
