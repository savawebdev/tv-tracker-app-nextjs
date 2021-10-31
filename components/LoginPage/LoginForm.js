import React, { useRef } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import classes from './LoginForm.module.scss';
import Label from '../UI/Form/Label';
import Input from '../UI/Form/Input';
import Button from '../UI/Button/Button';

const LoginForm = () => {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
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
