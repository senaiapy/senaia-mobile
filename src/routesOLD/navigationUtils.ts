/* eslint-disable unicorn/filename-case */
/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 20:57:35
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 12:36:35
 * @ Description:
 */
import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import { createRef } from 'react';

export const navigationRef = createNavigationContainerRef();
export const isMountedRef = createRef();

interface NavigateProps {
  (name: string, params: Record<string, unknown>): void;
}

// Use this function to navigate to specific page when you are outisde of a component
export const navigate: NavigateProps = () => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

export const navigatePop = (): void => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.pop());
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

export const popToTop = (): void => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.popToTop());
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};
