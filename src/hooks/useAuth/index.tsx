/**
 * @ Author: Your name
 * @ Create Time: 2022-02-08 21:09:10
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:54:52
 * @ Description:
 */

import type { ReactNode } from 'react';
import React from 'react';

import { AuthProvider } from './auth';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return <AuthProvider>{children}</AuthProvider>;
}

export { AppProvider };
