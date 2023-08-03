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

const getObj: any = async (endpoint: string, ids: any, datas: any) => {
  try {
    const { data } = await ApiClient.get<any>(
      '/' + endpoint + '/' + ids,
      datas
    );
    return data;
  } catch (error) {
    console.error('modifyObj - Error: ', error);
    return undefined;
  }
};

export default function useModifyObj<T>(endpoint: string, ids: any, datas: T) {
  return useMutation<T>(endpoint, getObj(endpoint, ids, datas));
}
/*
const useAddObj = {
  usePutObj,
};
export default useAddObj;
*/
