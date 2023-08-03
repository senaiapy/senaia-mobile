/* eslint-disable unicorn/filename-case */
/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 20:57:35
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 10:41:50
 * @ Description:
 */

import { useMutation, useQuery } from 'react-query';

import type {
  CreateUserRequestPayload,
  DeleteUserRequestPayload,
  ModifyUserRequestPayload,
} from './types';
import { createUser, deleteUser, getUserDetails, modifyUser } from './users';

function useUser({ userId }: any) {
  //const userIds = {userId: 1};
  return useQuery(
    [`user-${userId}`, { userId }],
    () => getUserDetails(userId),
    {
      enabled: !!userId,
      onSuccess: (data) => console.log('getUserDetail onSuccess>>> ', data),
    }
  );
}

async function useUserId({ userId }: any) {
  return await getUserDetails(userId);
}

function useCreateUser() {
  return useMutation(
    'new-user',
    ({ name, job }: CreateUserRequestPayload) => createUser({ name, job }),
    {
      onSuccess: (data) => console.log('useCreateUser onSuccess>>> ', data),
    }
  );
}

function useModifyUser() {
  return useMutation(
    'modify-user',
    ({ userId, name, job }: ModifyUserRequestPayload) =>
      modifyUser({ userId, name, job }),
    {
      onSuccess: (data) => console.log('useModifyUser onSuccess>>> ', data),
    }
  );
}

function useDeleteUser() {
  return useMutation(
    'delete-user',
    ({ userId }: DeleteUserRequestPayload) => deleteUser({ userId }),
    {
      onSuccess: (data) => console.log('useDeletedUser onSuccess>>> ', data),
    }
  );
}

export { useCreateUser, useDeleteUser, useModifyUser, useUser, useUserId };
