import React from 'react';
import classes from './Button.module.scss';

const Button = ({ label, args, color }) => {
  return (
    <button className={`${classes.button} ${classes[color]}`} {...args}>
      {label}
    </button>
  );
};

export default Button;
