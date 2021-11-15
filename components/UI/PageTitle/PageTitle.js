import React from 'react';
import classes from './PageTitle.module.scss';

const PageTitle = ({ label }) => {
  return <h1 className={classes['page-title']}>{label}</h1>;
};

export default PageTitle;
