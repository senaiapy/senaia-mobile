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

class ServicoService {
  async cadastrar(data: any) {
    let token = await AsyncStorage.getItem('TOKEN');
    console.log(data);
    return axios({
      url: Env.API_URL + 'servico/cadastrar',
      method: 'POST',
      timeout: parseInt(Env.TIMEOUT_REQUEST || '6000', 10),
      data: data,
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

const servicoService = new ServicoService();
export default servicoService;
