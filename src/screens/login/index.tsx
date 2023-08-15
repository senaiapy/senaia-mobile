import React from 'react';

import { useAuth } from '@/core';
import { useSoftKeyboardEffect } from '@/core/keyboard';

import type { LoginFormProps } from './login-form';
import { LoginForm } from './login-form';
import { FocusAwareStatusBar } from '@/ui';

export const Login = () => {
  const signIn = useAuth.use.signIn();
  useSoftKeyboardEffect();

  const onSubmit: LoginFormProps['onSubmit'] = (data) => {
    console.log(data);
    signIn({ access: 'access-token', refresh: 'refresh-token' });
  };
  <>
  <FocusAwareStatusBar />
  <LoginForm onSubmit={onSubmit} />
</>
};
