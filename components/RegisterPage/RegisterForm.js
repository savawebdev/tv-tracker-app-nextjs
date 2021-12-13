import React, { Fragment, useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import useStore from '../../store/store';
import Label from '../UI/Form/Label';
import Input from '../UI/Form/Input';
import Button from '../UI/Button/Button';
import AuthForm from '../UI/Form/AuthForm';
import FormControl from '../UI/Form/FormControl';
import Alert from '../UI/Alert/Alert';
import PageTitle from '../UI/PageTitle/PageTitle';

const registerUser = async (email, password) => {
  const result = await fetch('/api/auth/register-user', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await result.json();
  return data;
};

const RegisterForm = () => {
  const { setShows, showAlert, setShowAlert, setAlertType, setAlertMessage } =
    useStore();
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
      setShowAlert();
      setAlertType('error');
      setAlertMessage('Passwords must match!');
      setTimeout(() => {
        setShowAlert();
      }, 3000);
      return;
    }

    setShowAlert();
    setAlertType('info');
    setAlertMessage('Creating your account, please wait...');

    const register = await registerUser(email, password);

    setAlertMessage('Logging you in, please wait...');
    const result = await signIn('credentials', {
      redirect: false,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    setShows([]);

    setShowAlert();

    if (result.error) {
      setAlertType('error');
      setAlertMessage(result.error);
      return;
    }

    router.push('/userprofile');
  };

  return (
    <Fragment>
      {showAlert && <Alert />}
      <AuthForm args={{ onSubmit: submitHandler }}>
        <PageTitle label='Register' />
        <FormControl>
          <Label label='Email' htmlFor='email' />
          <Input
            args={{ type: 'email', name: 'email', id: 'email', ref: emailRef }}
            required={true}
          />
        </FormControl>
        <FormControl>
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
        </FormControl>
        <FormControl>
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
        </FormControl>

        <FormControl>
          <Button
            label='Register'
            args={{ type: 'submit' }}
            color='green'
            size='small'
          />
        </FormControl>
      </AuthForm>
    </Fragment>
  );
};

export default RegisterForm;
