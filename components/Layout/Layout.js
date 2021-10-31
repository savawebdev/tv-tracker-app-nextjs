import React, { Fragment } from 'react';
import Header from '../Header/Header';
import classes from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>{children}</main>
    </Fragment>
  );
};

export default Layout;
