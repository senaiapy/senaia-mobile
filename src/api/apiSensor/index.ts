//###########################################
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//###########################################

import { Env } from '@env';
import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.100.159:3333'
  // baseURL: 'http://localhost:3333'
  baseURL: String(Env.baseURL),
  timeout: 60000,
});

export default api;
