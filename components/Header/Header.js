import React from 'react';
import classes from './Header.module.scss';
import Brand from './Brand/Brand';

const Header = () => {
  return (
    <header className={classes.header}>
      <Brand />
    </header>
  );
};

export default Header;
