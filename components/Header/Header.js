import React from 'react';
import classes from './Header.module.scss';
import Brand from './Brand/Brand';
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <header className={classes.header}>
      <Brand />
      <Navbar />
    </header>
  );
};

export default Header;
