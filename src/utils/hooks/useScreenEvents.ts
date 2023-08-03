/* eslint-disable unicorn/filename-case */
/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 23:13:37
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 12:25:32
 * @ Description:
 */
import { useEffect } from 'react';

export function ScreenEvents(navigation: {
  addListener: (arg0: string, arg1: { (): boolean; (): boolean }) => any;
}) {
  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      return true;
    });
    const unsubscribeBlur = navigation.addListener('blur', () => {
      return false;
    });

    () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation]);
}
