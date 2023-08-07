/* eslint-disable max-lines-per-function */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-08-17 13:35
// ########################################
// @ Modified time: 2022-08-17 13:03:35

import { Env } from '@env';
import type { AnyFalsy } from 'underscore';

//const server = 'https://senaiaweb.online/api/v0/senaia/wdb'
const server = Env.API_HTTP + Env.API_API + Env.API_WDB;
// /tebusco
const servers = Env.API_HTTP + Env.API_API + Env.API_WDB;

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
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

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
api/v0/tebusco/wdb
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
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

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
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

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
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

export type UserCategoryPayload = {
  user_id?: number;
  key?: number;
  title?: string;
  name?: string;
  address?: string;
  price?: string;
  description?: string;
  photo?: string;
  star?: string;
  reviews?: string;
  category?: string;
  img?: string;
  other?: string;
  dollar?: string;
  cleaner?: string;
  users_category_sync?: boolean;

  id?: number;
  created_at?: number;
  modified_at?: number;
};

type ServerUserCategory = {
  user_id?: number;
  key: number;
  title?: string;
  name?: string;
  address?: string;
  price?: string;
  description?: string;
  photo?: string;
  star?: string;
  reviews?: string;
  category?: string;
  img?: string;
  other?: string;
  dollar?: string;
  cleaner?: string;
  users_category_sync?: boolean;

  id?: number;
  created_at?: number;
  modified_at?: number;
};

const createUserCategoryApi = async (
  userCategoryPayload: UserCategoryPayload
) => {
  // console.log("SERVER", server);
  // console.log("DATUS", userCategoryPayload);

  const returno = await api<ServerUserCategory>(`${server}/categoryuser`, {
    method: 'POST',
    body: userCategoryPayload,
  });
  return returno;
};

const getUserCategoryApi = async (postId: number) => {
  const returno = await api<any>(`${servers}/categoryuser/${postId}`, {
    method: 'GET',
  });
  return returno;
};

const updateUserCategoryApi = async (categoryPayload: any, postId: number) => {
  const returno = await api<any>(`${servers}/categoryuser/${postId}`, {
    method: 'PATCH',
    body: categoryPayload,
  });
  return returno;
};

const deleteUserCategoryApi = (postId: number) => {
  return api<number>(`${server}/categoryuser/${postId}`, {
    method: 'DELETE',
  });
};

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

export type GeneralPayload = {
  generalId: string;
  generalUniqueId?: string;
  general_vacuna?: string;
  general_raza?: string;
  general_classificacion?: string;
  general_dispositivo?: string;
  general_color?: string;
  general_categoria?: string;
  general_modalidad?: string;
  general_destino?: string;
  general_permission?: string;
  general_1?: string;
  general_2?: string;
  general_3?: string;
  general_4?: string;
  general_5?: string;
  general_6?: string;
  general_7?: string;
  general_8?: string;
  general_9?: string;
  general_10?: string;
  general_is_sync?: boolean;
  dbversion?: string;

  id?: number;
  created_at?: number;
  updated_at?: number;
};

type ServerGeneral = {
  generalId: string;
  generalUniqueId?: string;
  general_vacuna?: string;
  general_raza?: string;
  general_classificacion?: string;
  general_dispositivo?: string;
  general_color?: string;
  general_categoria?: string;
  general_modalidad?: string;
  general_destino?: string;
  general_permission?: string;
  general_1?: string;
  general_2?: string;
  general_3?: string;
  general_4?: string;
  general_5?: string;
  general_6?: string;
  general_7?: string;
  general_8?: string;
  general_9?: string;
  general_10?: string;
  general_is_sync?: boolean;
  dbversion?: string;

  id?: number;
  created_at?: number;
  updated_at?: number;
};

const createGeneralApi = async (generalPayload: GeneralPayload) => {
  // console.log("SERVER", server);
  // console.log("DATUS", generalPayload);

  const returno = await api<ServerGeneral>(`${server}/general`, {
    method: 'POST',
    body: generalPayload,
  });
  return returno;
};

const getGeneralApi = async (postId: number) => {
  const returno = await api<any>(`${servers}/general/${postId}`, {
    method: 'GET',
  });
  return returno;
};

const updateGeneralApi = async (categoryPayload: any, postId: number) => {
  const returno = await api<any>(`${servers}/general/${postId}`, {
    method: 'PATCH',
    body: categoryPayload,
  });
  return returno;
};

const deleteGeneralApi = (postId: number) => {
  return api<number>(`${server}/general/${postId}`, {
    method: 'DELETE',
  });
};

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
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
  // console.log('COIBFE', returno);
  return returno;
};

const updateUserCoibfeIdApi = async (usuarioPayload: AnyFalsy) => {
  const returno = await api<any>(`${servers}/usuario/cadastrarCId`, {
    method: 'POST',
    body: usuarioPayload,
  });
  return returno;
};
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

const downloadDumpApi = async () => {
  type Dump = {
    coibfefrigorificos: ServerCoibfeFrigorifico[];
    coibfepropriedads: ServerCoibfePropriedad[];
    coibfeproductors: ServerCoibfeProductor[];
    categoryusers: ServerUserCategory[];
    generals: ServerGeneral[];
  };
  // const dumps = await api<Dump>(`${server}/coibfecoibfesdump`, {
  //   method: 'GET',
  // });
  type DumpFrigorificos = {
    coibfefrigorificos: ServerCoibfeFrigorifico[];
  };
  type DumpPropriedads = {
    coibfepropriedads: ServerCoibfePropriedad[];
  };
  type DumpProductors = {
    coibfeproductors: ServerCoibfeProductor[];
  };
  type DumpCategoryUsers = {
    categoryusers: ServerUserCategory[];
  };
  type DumpGeneral = {
    generals: ServerGeneral[];
  };
  const { coibfefrigorificos } = await api<DumpFrigorificos>(
    `${server}/coibfefrigorificodump`,
    {
      method: 'GET',
    }
  );

  const { coibfepropriedads } = await api<DumpPropriedads>(
    `${server}/coibfepropriedaddump`,
    {
      method: 'GET',
    }
  );

  const { coibfeproductors } = await api<DumpProductors>(
    `${server}/coibfeproductordump`,
    {
      method: 'GET',
    }
  );

  const { categoryusers } = await api<DumpCategoryUsers>(
    `${server}/categoryuserdump`,
    {
      method: 'GET',
    }
  );

  const { generals } = await api<DumpGeneral>(`${server}/generaldump`, {
    method: 'GET',
  });

  const dumps: Dump = {
    coibfefrigorificos,
    coibfepropriedads,
    coibfeproductors,
    categoryusers,
    generals,
  };
  // console.log('DUMP', server);
  console.log('DUMP');
  // console.log('DUMPS', dumps);

  return dumps;
};
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

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

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

export {
  createCoibfeCoibfesApi,
  createCoibfeFrigorificoApi,
  createCoibfeProductorApi,
  createCoibfePropriedadApi,
  createGeneralApi,
  createUserCategoryApi,
  deleteCoibfeFrigorificoApi,
  deleteCoibfeProductorApi,
  deleteCoibfePropriedadApi,
  deleteGeneralApi,
  deleteUserCategoryApi,
  downloadDumpApi,
  getGeneralApi,
  getUserCategoryApi,
  updateGeneralApi,
  updateUserCategoryApi,
  updateUserCoibfeIdApi,
};
