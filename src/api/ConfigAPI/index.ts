import { Env } from '@env';

const Config = {
  // API_URL: String(GLOBAL.baseURL + GLOBAL.API_FRAME + '/'),
  API_URL: Env.API_URL,
  TIMEOUT_REQUEST: parseInt(Env.TIMEOUT_REQUEST || '6000', 10),
  HEADER_REQUEST: {
    Accept: 'application/json',
  },
};
export default Config;
