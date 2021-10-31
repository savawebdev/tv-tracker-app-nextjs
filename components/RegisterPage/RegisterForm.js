import React from 'react';
import classes from './RegisterForm.module.scss';
import Label from '../UI/Form/Label';
import Input from '../UI/Form/Input';

const RegisterForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes['form-control']}>
        <Label label='Email' htmlFor='email' />
        <Input args={{ type: 'email', name: 'email', id: 'email' }} />
      </div>
    </form>
  );
};

export default RegisterForm;
