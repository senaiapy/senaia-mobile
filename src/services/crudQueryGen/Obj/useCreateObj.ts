/* eslint-disable unicorn/filename-case */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

import { useMutation } from 'react-query';

import { ApiClient } from '../ApiClient';

const getObj: any = async (endpoint: string, datas: any) => {
  try {
    const { data } = await ApiClient.post<any>('/' + endpoint, datas);
    return data;
  } catch (error) {
    console.error('modifyObj - Error: ', error);
    return undefined;
  }
};

export default function useCreateObj<T>(endpoint: string, datas: T) {
  return useMutation<any>(endpoint, getObj(endpoint, datas));
}
/*
const useAddObj = {
  usePutObj,
};
export default useAddObj;
*/
