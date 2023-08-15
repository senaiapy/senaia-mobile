// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-08-17 13:35
// ########################################
// @ Modified time: 2022-08-17 13:03:35
import { Env } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

class NftService {
  async cadastrar(data: any) {
    // console.log(data);
    return axios({
      url: Env.EXPO_PUBLIC_API_URL + 'nft/cadastrar',
      method: 'POST',
      timeout: parseInt(Env.TIMEOUT_REQUEST || '6000', 10),
      data: data,
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  async login(data: any) {
    return axios({
      url: Env.EXPO_PUBLIC_API_URL + 'nft/login',
      method: 'POST',
      timeout: parseInt(Env.TIMEOUT_REQUEST || '6000', 10),
      data: data,
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        AsyncStorage.setItem('TOKEN', response.data.access_token);
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  async loginComToken(data: any) {
    return axios({
      url: Env.EXPO_PUBLIC_API_URL + 'nft/login-token',
      method: 'POST',
      timeout: parseInt(Env.TIMEOUT_REQUEST || '6000', 10),
      data: data,
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        if (response.data.access_token) {
          AsyncStorage.setItem('TOKEN', response.data.access_token);
          return Promise.resolve(response);
        } else {
          return Promise.reject(response);
        }
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

const nftService = new NftService();
export default nftService;
