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
 * @ Modified time: 2022-04-17 12:25:39
 * @ Description:
 */
import { useEffect, useState } from 'react';

export function useTransitionEnd(navigation: {
  addListener: (arg0: string, arg1: (d: any) => void) => any;
}) {
  const [end, setEnd] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener(
      'transitionEnd',
      (d: { data: { closing: any } }) => {
        if (!d.data.closing) {
          setEnd(true);
        }
      }
    );

    return unsubscribe;
  }, [navigation]);

  return end;
}
