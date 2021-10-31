import React, { useRef } from 'react';
import classes from './LoginForm.module.scss';
import Label from '../UI/Form/Label';
import Input from '../UI/Form/Input';
import Button from '../UI/Button/Button';

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <form className={classes.form}>
      <h1>Login</h1>
      <div className={classes['form-control']}>
        <Label label='Email' htmlFor='email' />
        <Input
          args={{ type: 'email', name: 'email', id: 'email', ref: emailRef }}
          required={true}
        />
      </div>
      <div className={classes['form-control']}>
        <Label label='Password' htmlFor='password' />
        <Input
          args={{
            type: 'password',
            name: 'password',
            id: 'password',
            ref: passwordRef,
          }}
          required={true}
        />
      </div>

      <div className={classes['form-control']}>
        <Button label='Login' args={{ type: 'submit' }} color='success' />
      </div>
    </form>
  );
};

export default LoginForm;
