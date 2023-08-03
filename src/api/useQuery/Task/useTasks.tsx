/* eslint-disable unicorn/filename-case */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

import { useQuery } from 'react-query';

import { client } from '../client';

type TaskType = {
  label: string;
  done: boolean;
  color: string;
};

const getTasks = async () => {
  const { data } = await client.get('/tasks');
  return data;
};

export function useTasks() {
  return useQuery<TaskType[]>('tasks', getTasks);
}
