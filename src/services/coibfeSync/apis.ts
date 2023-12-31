// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-08-17 13:35
// ########################################
// @ Modified time: 2022-08-17 13:03:35

import { Env } from '@env';

//const server = 'localhost:3000'; /senaia/wdb
const server = Env.API_HTTP + Env.API_API + Env.API_WDB;
// /senaia
const servers = Env.API_HTTP + Env.API_API + Env.API_SENAIA;

type ApiOptions = {
  method?: 'GET' | 'POST' | 'DELETE' | 'PATCH';
  body?: any;
};

const api = <T>(url: RequestInfo, { method, body }: ApiOptions = {}) =>
  fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: method === 'POST' ? JSON.stringify(body) : undefined,
  }).then((res) => res.json() as Promise<T>);

export type CoibfePropriedadPayload = {
  dbversion?: string;
  propriedad_id?: string;
  propriedadname: string;
  propriedadpropietario?: string;
  propriedadstatus?: string;
  propriedadsigor: string;
  propriedadsitrap?: string;
  propriedaddepartamento?: string;
  propriedaddistrito?: string;
  propriedadproductors?: string;

  id?: number;
  title: string;
  body: string;
};

type ServerCoibfePropriedad = {
  dbversion?: string;
  propriedad_id?: string;
  propriedadname: string;
  propriedadpropietario?: string;
  propriedadstatus?: string;
  propriedadsigor: string;
  propriedadsitrap: string;
  propriedaddepartamento?: string;
  propriedaddistrito?: string;
  propriedadproductors?: string;

  id: number;
  title: string;
  body: string;

  created_at?: number;
  updated_at?: number;
};

/*
api/v0/senaia/wdb
coibfecoibfesdump
coibfecoibfes
coibfefrigorifico
coibfeproductor
propriedad_productor
coibfepropriedad
coibfetecnico
coibfetecnicostatus
*/

const createCoibfePropriedadApi = async (
  coibfepropriedadPayload: CoibfePropriedadPayload
) => {
  const returno = await api<ServerCoibfePropriedad>(
    `${server}/coibfepropriedad`,
    {
      method: 'POST',
      body: coibfepropriedadPayload,
    }
  );
  return returno;
};

const deleteCoibfePropriedadApi = (postId: number) => {
  return api<number>(`${server}/coibfepropriedad/${postId}`, {
    method: 'DELETE',
  });
};

export type CoibfeProductorPayload = {
  dbversion?: string;
  productorname: string;
  productor_id: string;
  productortoken?: string;
  productorsitrap: string;
  productoracreditacion?: string;
  productor_propriedad_id?: string;
  productorpassword?: string;
  productormail?: string;
  productorphone?: string;
  productorissync?: string;

  id?: number;
  title: string;
  body: string;

  productordocnroprop?: string;
  productordocdigprop?: string;
  productordocorigabrev?: string;
  productordoctipoabrev?: string;
  productorstatus?: string;
  productormessages?: string;
  productorkeyprivate?: string;
  productorapikeysoftware?: string;
};

type ServerCoibfeProductor = {
  dbversion?: string;
  productorname: string;
  productor_id: string;
  productortoken?: string;
  productorsitrap?: string;
  productoracreditacion?: string;
  productor_propriedad_id?: string;
  productorpassword?: string;
  productormail?: string;
  productorphone?: string;
  productorissync?: string;

  id: number;
  post_id: number;
  body: string;
  created_at?: number;
  updated_at?: number;

  productordocnroprop?: string;
  productordocdigprop?: string;
  productordocorigabrev?: string;
  productordoctipoabrev?: string;
  productorstatus?: string;
  productormessages?: string;
  productorkeyprivate?: string;
  productorapikeysoftware?: string;
};

const createCoibfeProductorApi = async (
  postId: number,
  coibfeProductorPayload: CoibfeProductorPayload
) => {
  const returno = await api<ServerCoibfeProductor>(
    `${server}/coibfeproductor/${postId}`,
    {
      method: 'POST',
      body: coibfeProductorPayload,
    }
  );
  //console.log(returno);
  return returno;
};

const deleteCoibfeProductorApi = (postId: number) => {
  return api<number>(`${server}/coibfeproductor/${postId}`, {
    method: 'DELETE',
  });
};

export type CoibfeFrigorificoPayload = {
  dbversion?: string;
  frigorificoname: string;
  frigorifico_id: string;
  frigorificodepartamento?: string;
  frigorificokeyprivate?: string;
  frigorificostatus?: string;

  id?: number;
  title: string;
  body: string;
};

type ServerCoibfeFrigorifico = {
  dbversion?: string;
  frigorificoname: string;
  frigorifico_id: string;
  frigorificodepartamento?: string;
  frigorificokeyprivate?: string;
  frigorificostatus?: string;

  title: string;

  id: number;
  post_id: number;
  body: string;
  created_at?: number;
  updated_at?: number;
};

const createCoibfeFrigorificoApi = async (
  postId: number,
  coibfeFrigorificoPayload: CoibfeFrigorificoPayload
) => {
  const returno = await api<ServerCoibfeFrigorifico>(
    `${server}/coibfefrigorifico/${postId}`,
    {
      method: 'POST',
      body: coibfeFrigorificoPayload,
    }
  );
  return returno;
};

const deleteCoibfeFrigorificoApi = (postId: number) => {
  return api<number>(`${server}/coibfefrigorifico/${postId}`, {
    method: 'DELETE',
  });
};

export type CoibfeCoibfesPayload = {
  dbversion?: string;
  coibfeid: string;
  coibfekey?: string;
  coibfetoken?: string;
  coibfecodigov?: string;
  coibfedestino?: string;
  coibfefinalidad?: string;
  coibfetransporte?: string;
  coibfeaninovillos?: string;
  coibfeanitoros?: string;
  coibfeanivacas?: string;
  coibfeanivaquillas?: string;
  coibfeaniotros?: string;
  coibfeanitotal?: string;
  coibfeanihilton?: string;
  coibfetecnico_vpa_id?: string;
  coibfetecniconame?: string;
  coibfefrigorificoname?: string;
  coibfefrigorifico_id?: string;
  coibfeproductorname?: string;
  coibfeproductor_id?: string;
  coibfeproductorsitrap?: string;
  coibfepropriedadname?: string;
  coibfepropriedad_id?: string;
  coibfepropriedadsigor?: string;
  coibfepropriedadsitrap?: string;
  coibfepropriedaddepartamento?: string;
  coibfepropriedaddistrito?: string;
  coibfepropriedad_productor_id?: string;
  coibfeprecinto1?: string;
  coibfeprecinto2?: string;
  coibfeprecinto3?: string;
  coibfepos_id?: string;
  coibfeposlatitud?: string;
  coibfeposlongitud?: string;
  coibfeposdate?: string;
  coibfeposapikeymobile?: string;
  coibfeobs?: string;
  coibfedocnroprop?: string;
  coibfedocdigprop?: string;
  coibfedocorigabrev?: string;
  coibfedoctipoabrev?: string;
  coibfeerrocode?: string;
  coibfeerromessage?: string;
  coibfeanimales?: string;
  coibfe_issinc?: string;

  id: number;
  title: string;
  body: string;
  created_at?: number;
  updated_at?: number;
};

export type ServerCoibfeCoibfes = {
  dbversion?: string;
  coibfeid: string;
  coibfekey?: string;
  coibfetoken?: string;
  coibfecodigov?: string;
  coibfedestino?: string;
  coibfefinalidad?: string;
  coibfetransporte?: string;
  coibfeaninovillos?: string;
  coibfeanitoros?: string;
  coibfeanivacas?: string;
  coibfeanivaquillas?: string;
  coibfeaniotros?: string;
  coibfeanitotal?: string;
  coibfeanihilton?: string;
  coibfetecnico_vpa_id?: string;
  coibfetecniconame?: string;
  coibfefrigorificoname?: string;
  coibfefrigorifico_id?: string;
  coibfeproductorname?: string;
  coibfeproductor_id?: string;
  coibfeproductorsitrap?: string;
  coibfepropriedadname?: string;
  coibfepropriedad_id?: string;
  coibfepropriedadsigor?: string;
  coibfepropriedadsitrap?: string;
  coibfepropriedaddepartamento?: string;
  coibfepropriedaddistrito?: string;
  coibfepropriedad_productor_id?: string;
  coibfeprecinto1?: string;
  coibfeprecinto2?: string;
  coibfeprecinto3?: string;
  coibfepos_id?: string;
  coibfeposlatitud?: string;
  coibfeposlongitud?: string;
  coibfeposdate?: string;
  coibfeposapikeymobile?: string;
  coibfeobs?: string;
  coibfedocnroprop?: string;
  coibfedocdigprop?: string;
  coibfedocorigabrev?: string;
  coibfedoctipoabrev?: string;
  coibfeerrocode?: string;
  coibfeerromessage?: string;
  coibfeanimales?: string;
  coibfe_issinc?: string;
  id: number;
  post_id: number;
  body: string;
  created_at?: number;
  updated_at?: number;
};

export type TCoibfes = {
  id?: number;
  coibfeid: string;
  coibfekey?: string;
  coibfetoken?: string;
  coibfecodigov?: string;
  coibfedestino?: string;
  coibfefinalidad?: string;
  coibfetransporte?: string;
  coibfeaninovillos?: string;
  coibfeanitoros?: string;
  coibfeanivacas?: string;
  coibfeanivaquillas?: string;
  coibfeaniotros?: string;
  coibfeanitotal?: string;
  coibfeanihilton?: string;
  coibfetecnico_vpa_id?: string;
  coibfetecniconame?: string;
  coibfefrigorificoname?: string;
  coibfefrigorifico_id?: string;
  coibfeproductorname?: string;
  coibfeproductor_id?: string;
  coibfeproductorsitrap?: string;
  coibfepropriedadname?: string;
  coibfepropriedad_id?: string;
  coibfepropriedadsigor?: string;
  coibfepropriedadsitrap?: string;
  coibfepropriedaddepartamento?: string;
  coibfepropriedaddistrito?: string;
  coibfepropriedad_productor_id?: string;
  coibfeprecinto1?: string;
  coibfeprecinto2?: string;
  coibfeprecinto3?: string;
  coibfepos_id?: string;
  coibfeposlatitud?: string;
  coibfeposlongitud?: string;
  coibfeposdate?: string;
  coibfeposapikeymobile?: string;
  coibfeobs?: string;
  coibfedocnroprop?: string;
  coibfedocdigprop?: string;
  coibfedocorigabrev?: string;
  coibfedoctipoabrev?: string;
  coibfeerrocode?: string;
  coibfeerromessage?: string;
  coibfeanimales?: string;
  coibfe_issinc?: string;
};

const createCoibfeCoibfesApi = async (coibfeCoibfesPayload: TCoibfes) => {
  const returno = await api<TCoibfes>(`${server}/coibfecoibfes`, {
    method: 'POST',
    body: coibfeCoibfesPayload,
  });
  console.log('COIBFE', returno);
  return returno;
};

const downloadDumpApi = async () => {
  type Dump = {
    coibfefrigorificos: ServerCoibfeFrigorifico[];
    coibfepropriedads: ServerCoibfePropriedad[];
    coibfeproductors: ServerCoibfeProductor[];
  };
  const dumps = await api<Dump>(`${server}/coibfecoibfesdump`, {
    method: 'GET',
  });
  //console.log('DUMP', dumps);
  console.log('DUMP');
  return dumps;
};

export type TUsuarioDto = {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  cpf: string;
  user_id?: string;
  user_name_register?: string;
  user_status?: string;
  user_locked?: string;
  user_key_hardware?: string;
  user_level_access?: string;
  user_vpa?: string;
  user_token?: string;
  user_public_key?: string;
  user_private_key?: string;
  user_wallet_id?: string;
  user_system_type?: string;
  Status?: string;
};

const updateUserCoibfeIdApi = async (usuarioPayload: any) => {
  const returno = await api<any>(`${servers}/usuario/cadastrarCId`, {
    method: 'POST',
    body: usuarioPayload,
  });
  return returno;
};

export {
  createCoibfeCoibfesApi,
  createCoibfeFrigorificoApi,
  createCoibfeProductorApi,
  createCoibfePropriedadApi,
  deleteCoibfeFrigorificoApi,
  deleteCoibfeProductorApi,
  deleteCoibfePropriedadApi,
  downloadDumpApi,
  updateUserCoibfeIdApi,
};
