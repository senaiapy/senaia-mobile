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
 * @ Modified time: 2022-04-17 12:25:25
 * @ Description:
 */
import { useEffect } from 'react';
import type { KeyboardEventListener } from 'react-native';
import { Keyboard } from 'react-native';

export default function useKeyboardEvents(
  onKeyboardShow: KeyboardEventListener,
  onKeyboardHide: KeyboardEventListener
) {
  useEffect(() => {
    const keyboardShow = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardShow
    );
    const keyboardHide = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardHide
    );

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, [onKeyboardShow, onKeyboardHide]);
}
