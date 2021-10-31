import React from 'react';
import classes from './Input.module.scss';

const Input = ({ args, required }) => {
  if (required) {
    return <input className={classes.input} {...args} required />;
  }

  return <input className={classes.input} {...args} />;
};

export default Input;
