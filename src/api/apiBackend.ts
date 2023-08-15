/* eslint-disable unicorn/filename-case */
/**
 * @ Author: Your name
 * @ Create Time: 2022-02-09 12:39:09
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:50:08
 * @ Description:
 */

import { Env } from '@env';
import axios from 'axios';

//url filmes em Cartaz
// https://api.themoviedb.org/3/movie/now_playing?api_key=5542d7faf4df0ab380d0bde036b34b06&language=pt-BR&page=1
// https://api.themoviedb.org/3/
// movie/now_playing &language=pt-BR &page=1
// https://pastebin.com/raw/r5n57KrC
// http://brtv2021.top:8080/get.php?username=teste_m&password=1234321&type=m3u_plus&output=mpegts
export const key = '5542d7faf4df0ab380d0bde036b34b06';

const apiLista = axios.create({
  baseURL: Env.EXPO_PUBLIC_baseURL,
  timeout: 60000,
  /*
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept: 'application/json',
    'Content-Type': 'application/json',
   headers: {'X-Custom-Header': 'foobar'},
    */
});

export { apiLista };
