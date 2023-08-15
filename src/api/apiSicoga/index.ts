// ###########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  10/04/2020
// ###########################################

import { Env } from '@env';
import axios from 'axios';

const api = axios.create({
  // EXPO_PUBLIC_baseURL: 'http://192.168.100.159:3333'
  // EXPO_PUBLIC_baseURL: 'http://localhost:3333'
  baseURL: String(Env.EXPO_PUBLIC_baseURL),
  timeout: 60000,
});

export default api;
