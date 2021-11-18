import React from 'react';
import classes from './Button.module.scss';

const Button = ({ label, args, color, size, disabled }) => {
  if (disabled) {
    return (
      <button
        className={`${classes.button} ${classes[color]} ${classes[size]} ${
          disabled && classes.disabled
        }`}
        {...args}
        disabled>
        {label}
      </button>
    );
  }

  return (
    <button
      className={`${classes.button} ${classes[color]} ${classes[size]}`}
      {...args}>
      {label}
    </button>
  );
};

export default Button;
