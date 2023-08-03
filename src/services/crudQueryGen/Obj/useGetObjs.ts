/* eslint-disable unicorn/filename-case */

// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

import { useQuery } from 'react-query';

import { ApiClient } from '../ApiClient';

const getObjs: any = async (endpoints: string) => {
  try {
    const { data } = await ApiClient.get<any>('/' + endpoints);
    return data;
  } catch (error) {
    console.error('modifyObj - Error: ', error);
    return undefined;
  }
};

export default function useGetObjs<T>(endpoints: string) {
  return useQuery<T[]>(endpoints, getObjs(endpoints));
}
