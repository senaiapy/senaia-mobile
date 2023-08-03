/**
 * @ Author: Your name
 * @ Create Time: 2022-02-08 21:06:28
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:49:01
 * @ Description:
 */

// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
import axios from 'axios';

/*
export function apiS() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          userToken: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',

        });
      }, 2000);
    });
  }
*/

const apiS = axios.create({
  baseURL: 'http://localhost:3333',
});

export default apiS;
