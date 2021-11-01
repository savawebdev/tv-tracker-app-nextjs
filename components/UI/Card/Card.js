import React from 'react';
import classes from './Card.module.scss';

const Card = ({ children, args }) => {
  return (
    <div className={classes.card} {...args}>
      {children}
    </div>
  );
};

export default Card;
