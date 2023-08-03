/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 20:57:35
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 11:08:53
 * @ Description:
 */

import { Env } from '@env';
import axios from 'axios';

const ApiClient = axios.create({
  baseURL: Env.API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default ApiClient;
