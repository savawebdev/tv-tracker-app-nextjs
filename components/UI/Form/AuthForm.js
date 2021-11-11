import React from 'react';
import classes from './AuthForm.module.scss';

const AuthForm = ({ args, children }) => {
  return (
    <form className={classes.form} {...args}>
      {children}
    </form>
  );
};

export default AuthForm;
