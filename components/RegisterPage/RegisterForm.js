import React, { useRef } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
// import { registerUser } from '../../lib/auth';
import classes from './RegisterForm.module.scss';
import Label from '../UI/Form/Label';
import Input from '../UI/Form/Input';
import Button from '../UI/Button/Button';

const registerUser = async (email, password) => {
  const result = await fetch('/api/auth/register-user', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await result.json();
};

const RegisterForm = () => {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      window.alert('Passwords must match!');
      return;
    }

    await registerUser(email, password);

    const result = await signIn('credentials', {
      redirect: false,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    router.push('/userprofile');
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
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
