/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 20:57:35
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 10:42:22
 * @ Description:
 */

export type UsersRequestPayload = {
  pageParam?: number;
  per_page?: number;
};

export type UsersSuccessPayload = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data?: User[] | null;
  support: Support;
};

export type UserDetailsRequestPayload = {
  userId: number;
};

export type UserDetailsSuccessPayload = {
  data: User;
  support: Support;
};

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type Support = {
  url: string;
  text: string;
};

export type CreateUserRequestPayload = {
  name: string;
  job: string;
};

export type CreateUserSuccessPayload = {
  name: string;
  job: string;
  id: string;
  created_at?: any;
};

export type ModifyUserRequestPayload = {
  userId: string;
  name: string;
  job: string;
};

export type ModifyUserSuccessPayload = {
  name: string;
  job: string;
  updated_at?: any;
};

export type DeleteUserRequestPayload = {
  userId: string;
};
