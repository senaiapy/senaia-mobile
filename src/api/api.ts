/**
 * @ Author: Your name
 * @ Create Time: 2022-02-09 12:39:09
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:50:04
 * @ Description:
 */
import { Env } from '@env';
import axios from 'axios';

//url filmes em Cartaz
// https://api.themoviedb.org/3/movie/now_playing?api_key=5542d7faf4df0ab380d0bde036b34b06&language=pt-BR&page=1
// https://api.themoviedb.org/3/
// movie/now_playing &language=pt-BR &page=1
// 'https://api.themoviedb.org/3'
export const key = '5542d7faf4df0ab380d0bde036b34b06';

const api = axios.create({
  baseURL: Env.baseURL,
  timeout: 60000,
  // headers: {'X-Custom-Header': 'foobar'},
});

export { api };
