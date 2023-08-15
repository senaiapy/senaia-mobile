import { Env } from '@env';
import axios from 'axios';

import type { Tecnico } from './type';

const apiClient = axios.create({
  baseURL:
    String(Env.baseURL) + String(Env.API_URL_FEED), //'http://localhost:3333/api/v0/senaia',
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 60000,
});

const findAll = async () => {
  const response = await apiClient.get<Tecnico[]>('/tecnicos');
  return response.data;
};

const findById = async (id: any) => {
  const response = await apiClient.get<Tecnico>(`/tecnico/${id}`);
  return response.data;
};

const findByTitle = async (title: string) => {
  const response = await apiClient.get<Tecnico[]>(`/tecnico?title=${title}`);
  return response.data;
};

const create = async ({ title, description }: Tecnico) => {
  const response = await apiClient.post<any>('/tecnico', {
    title,
    description,
  });
  return response.data;
};

const update = async (id: any, { title, description, published }: Tecnico) => {
  const response = await apiClient.put<any>(`/tecnico/${id}`, {
    title,
    description,
    published,
  });
  return response.data;
};

const deleteById = async (id: any) => {
  const response = await apiClient.delete<any>(`/tecnico/${id}`);
  return response.data;
};

const deleteAll = async () => {
  const response = await apiClient.delete<any>('/tecnicos');
  return response.data;
};

const useAxiosService = {
  findAll,
  findById,
  findByTitle,
  create,
  update,
  deleteById,
  deleteAll,
};

export default useAxiosService;
