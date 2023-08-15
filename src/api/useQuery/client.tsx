// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

import { Env } from '@env';
import axios from 'axios';

export const client = axios.create({
  baseURL: Env.API_URL,
});
