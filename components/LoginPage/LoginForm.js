import React, { useRef } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import useStore from '../../store/store';
import Label from '../UI/Form/Label';
import Input from '../UI/Form/Input';
import Button from '../UI/Button/Button';
import AuthForm from '../UI/Form/AuthForm';
import FormControl from '../UI/Form/FormControl';

const LoginForm = () => {
  const { loading, setLoading } = useStore();
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading();
    const result = await signIn('credentials', {
      redirect: false,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    setLoading();

    router.push('/userprofile');
  };

  return (
    <AuthForm args={{ onSubmit: submitHandler }}>
      <h1>Login</h1>
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

      {loading && (
        <FormControl>
          <p>Logging you in...</p>
        </FormControl>
      )}

      <FormControl>
        <Button label='Login' args={{ type: 'submit' }} color='success' />
      </FormControl>
    </AuthForm>
  );
};

export default LoginForm;
