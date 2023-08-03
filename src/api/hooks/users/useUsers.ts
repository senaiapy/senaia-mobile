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
 * @ Modified time: 2022-04-17 10:41:46
 * @ Description:
 */

import { useInfiniteQuery } from 'react-query';

import type { UsersSuccessPayload } from './types';
import { getUsers } from './users';

export default function useUsers({ per_page = 5 }) {
  return useInfiniteQuery<UsersSuccessPayload, Error>(
    'users',
    ({ pageParam = 1 }) => getUsers({ pageParam, per_page }),
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }

        return undefined;
      },
    }
  );
}
