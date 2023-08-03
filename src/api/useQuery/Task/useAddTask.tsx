/* eslint-disable unicorn/filename-case */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

import { useMutation } from 'react-query';

import { client } from '../client';

type TaskType = {
  label: string;
  done: boolean;
  color: string;
};

export function useAddTask() {
  return useMutation((data: TaskType) => client.post('/tasks', data));
}
