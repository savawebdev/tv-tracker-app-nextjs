import React, { useRef, Fragment } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { fetchData } from '../../lib/helpers';
import useStore from '../../store/store';
import Label from '../UI/Form/Label';
import Input from '../UI/Form/Input';
import Button from '../UI/Button/Button';
import AuthForm from '../UI/Form/AuthForm';
import FormControl from '../UI/Form/FormControl';
import Alert from '../UI/Alert/Alert';
import PageTitle from '../UI/PageTitle/PageTitle';

const LoginForm = () => {
  const { setShows, showAlert, setShowAlert, setAlertType, setAlertMessage } =
    useStore();
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    setShowAlert();
    setAlertType('info');
    setAlertMessage('Logging you in, please wait...');

    const result = await signIn('credentials', {
      redirect: false,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    const data = await fetchData('/api/shows/get-shows');
    setShows(data.shows);

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
        <PageTitle label='Login' />
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
          <Button
            label='Login'
            args={{ type: 'submit' }}
            color='green'
            size='small'
          />
        </FormControl>
      </AuthForm>
    </Fragment>
  );
};

export default LoginForm;
