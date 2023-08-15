/* eslint-disable max-params */
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

class CrudIdentify {
  async create(object: string, data: any) {
    return axios({
      url: Env.EXPO_PUBLIC_API_URL + 'wdb/' + object,
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

  async find(object: string) {
    return axios({
      url: Env.EXPO_PUBLIC_API_URL + 'wdb/' + object,
      method: 'GET',
      timeout: parseInt(Env.TIMEOUT_REQUEST || '6000', 10),
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  async findOne(object: string, id: any) {
    return axios({
      url: Env.EXPO_PUBLIC_API_URL + 'wdb/' + object + '/' + id,
      method: 'GET',
      timeout: parseInt(Env.TIMEOUT_REQUEST || '6000', 10),
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  async findRegister(object: string, register: string, values: any) {
    return axios({
      url:
        Env.EXPO_PUBLIC_API_URL +
        'wdb/' +
        object +
        '/search/' +
        register +
        '/' +
        values,
      method: 'GET',
      timeout: parseInt(Env.TIMEOUT_REQUEST || '6000', 10),
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  async update(object: string, data: any, id: any) {
    return axios({
      url: Env.EXPO_PUBLIC_API_URL + 'wdb/' + object + '/' + id,
      method: 'PATCH',
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

  async updateRegister(
    object: string,
    data: any,
    register: string,
    values: any
  ) {
    return axios({
      url:
        Env.EXPO_PUBLIC_API_URL +
        'wdb/' +
        object +
        '/search/' +
        register +
        '/' +
        values,
      method: 'PATCH',
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

  async delete(object: string, id: any) {
    return axios({
      url: Env.EXPO_PUBLIC_API_URL + 'wdb/' + object + '/' + id,
      method: 'DELETE',
      timeout: parseInt(Env.TIMEOUT_REQUEST || '6000', 10),
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  async saveToken(id: string, data: any) {
    return axios({
      url: Env.EXPO_PUBLIC_API_URL + 'wdb/usuario/one/token/' + id,
      method: 'PATCH',
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

  async cadastrarCoibfeId(data: any) {
    return axios({
      url: Env.EXPO_PUBLIC_API_URL + 'wdb/usuario/cadastrarCId',
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

  async recoverPassword(data: any) {
    return axios({
      url: Env.EXPO_PUBLIC_API_URL + 'wdb/usuario/recoverpassword',
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
      url: Env.EXPO_PUBLIC_API_URL + 'wdb/usuario/login',
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

  async simple_login(data: any) {
    return axios({
      url: Env.EXPO_PUBLIC_API_URL + 'wdb/usuario/simple_login',
      method: 'POST',
      timeout: parseInt(Env.TIMEOUT_REQUEST || '6000', 10),
      data: data,
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        // AsyncStorage.setItem('TOKEN', response.data.access_token);
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  async loginComToken(data: any) {
    return axios({
      url: Env.EXPO_PUBLIC_API_URL + 'wdb/usuario/login-token',
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

  async status(data: string) {
    return axios({
      url: Env.EXPO_PUBLIC_API_URL + 'wdb/usuario/listar_status/' + data,
      method: 'GET',
      timeout: parseInt(Env.TIMEOUT_REQUEST || '6000', 10),
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        // AsyncStorage.setItem('TOKEN', response.data.access_token);
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

const crudIdentifica = new CrudIdentify();
export default crudIdentifica;
/*
import crudIdentifica from'@/services/CrudIdentifica';
crudIdentifica.create(object, data)
crudIdentifica.find(object)
crudIdentifica.findOne(object, id)
crudIdentifica.findRegister(object, register, value)
crudIdentifica.update(object, data, id)
crudIdentifica.updateRegister(object, data, register, value)
crudIdentifica.delete(object, id)
*/
