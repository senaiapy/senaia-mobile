// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-08-17 13:35
// ########################################
// @ Modified time: 2022-08-17 13:03:35

import { Env } from '@env';
//const server = 'localhost:3000';
const server =
  Env.EXPO_PUBLIC_API_HTTP + Env.EXPO_PUBLIC_API_API + Env.EXPO_PUBLIC_API_WDB;
// const server = Env.EXPO_PUBLIC_API_WDB;

type ApiOptions = {
  method?: 'GET' | 'POST' | 'DELETE';
  body?: any;
};

const api = <T>(url: RequestInfo, { method, body }: ApiOptions = {}) =>
  fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: method === 'POST' ? JSON.stringify(body) : undefined,
  }).then((res) => res.json() as Promise<T>);

export type PostPayload = {
  title: string;
  body: string;
  comments?: string[];
};

type ServerPost = {
  id: number;
  title: string;
  body: string;
  created_at?: number;
  updated_at?: number;
};

const createPostApi = (postPayload: PostPayload) => {
  return api<ServerPost>(`${server}/posts`, {
    method: 'POST',
    body: postPayload,
  });
};

const deletePostApi = (postId: number) => {
  return api<number>(`${server}/posts/${postId}`, {
    method: 'DELETE',
  });
};

export type CommentPayload = {
  body: string;
};

type ServerComment = {
  id: number;
  post_id: number;
  body: string;
  created_at?: number;
  updated_at?: number;
};

const createCommentApi = (postId: number, commentPayload: CommentPayload) => {
  return api<ServerComment>(`${server}/posts/comment/${postId}`, {
    method: 'POST',
    body: commentPayload,
  });
};

const downloadDumpApi = () => {
  type Dump = {
    posts: ServerPost[];
    comments: ServerComment[];
  };

  return api<Dump>(`${server}/dump`);
};

export { createCommentApi, createPostApi, deletePostApi, downloadDumpApi };
