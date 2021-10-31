import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.copyright}>&copy; Andrei Sava 2021</p>
      <p className={classes.attribution}>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </footer>
  );
};

export default Footer;
