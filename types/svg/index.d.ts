/**
 * @ Author: Ing. Marcelo Anjos
 * @ Create Time: 2022-02-09 12:39:09
 * @ Modified by: Your name
 * @ Modified time: 2022-04-28 22:56:21
 * @ Description:
 */

declare module '*.svg' {
  import type React from 'react';
  import type { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
