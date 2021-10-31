import React, { useRef } from 'react';
import classes from './RegisterForm.module.scss';
import Label from '../UI/Form/Label';
import Input from '../UI/Form/Input';
import Button from '../UI/Button/Button';

const RegisterForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  return (
    <form className={classes.form}>
      <h1>Create an account</h1>
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
        <Label label='Confirm password' htmlFor='confirmpassword' />
        <Input
          args={{
            type: 'password',
            name: 'confirmpassword',
            id: 'confirmpassword',
            ref: confirmPasswordRef,
          }}
          required={true}
        />
      </div>
      <div className={classes['form-control']}>
        <Button label='Register' args={{ type: 'submit' }} color='success' />
      </div>
    </form>
  );
};

export default RegisterForm;
