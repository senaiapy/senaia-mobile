/* eslint-disable unicorn/filename-case */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
//* @ Create Time: 2022-08-04 12:39:09
// ########################################

import { tableSchema } from '@nozbe/watermelondb';

const coibfeCoibfeSchema = tableSchema({
  name: 'coibfecoibfes',
  columns: [
    { name: 'dbversion', type: 'string' },
    { name: 'coibfeid', type: 'string' },
    { name: 'coibfekey', type: 'string' },
    { name: 'coibfetoken', type: 'string' },
    { name: 'coibfecodigov', type: 'string' },
    { name: 'coibfedestino', type: 'string' },
    { name: 'coibfefinalidad', type: 'string' },
    { name: 'coibfetransporte', type: 'string' },
    { name: 'coibfeaninovillos', type: 'string' },
    { name: 'coibfeanitoros', type: 'string' },
    { name: 'coibfeanivacas', type: 'string' },
    { name: 'coibfeanivaquillas', type: 'string' },
    { name: 'coibfeaniotros', type: 'string' },
    { name: 'coibfeanitotal', type: 'string' },
    { name: 'coibfeanihilton', type: 'string' },
    { name: 'coibfetecnico_vpa_id', type: 'string' },
    { name: 'coibfetecniconame', type: 'string' },
    { name: 'coibfefrigorificoname', type: 'string' },
    { name: 'coibfefrigorifico_id', type: 'string' },
    { name: 'coibfeproductorname', type: 'string' },
    { name: 'coibfeproductor_id', type: 'string' },
    { name: 'coibfeproductorsitrap', type: 'string' },
    { name: 'coibfepropriedadname', type: 'string' },
    { name: 'coibfepropriedad_id', type: 'string' },
    { name: 'coibfepropriedadsigor', type: 'string' },
    { name: 'coibfepropriedadsitrap', type: 'string' },
    { name: 'coibfepropriedaddepartamento', type: 'string' },
    { name: 'coibfepropriedaddistrito', type: 'string' },
    { name: 'coibfepropriedad_productor_id', type: 'string' },
    { name: 'coibfeprecinto1', type: 'string' },
    { name: 'coibfeprecinto2', type: 'string' },
    { name: 'coibfeprecinto3', type: 'string' },
    { name: 'coibfepos_id', type: 'string' },
    { name: 'coibfeposlatitud', type: 'string' },
    { name: 'coibfeposlongitud', type: 'string' },
    { name: 'coibfeposdate', type: 'string' },
    { name: 'coibfeposapikeymobile', type: 'string' },
    { name: 'coibfeobs', type: 'string' },
    { name: 'coibfedocnroprop', type: 'string' },
    { name: 'coibfedocdigprop', type: 'string' },
    { name: 'coibfedocorigabrev', type: 'string' },
    { name: 'coibfedoctipoabrev', type: 'string' },
    { name: 'coibfeerrocode', type: 'string' },
    { name: 'coibfeerromessage', type: 'string' },
    { name: 'coibfeanimales', type: 'string' },
    { name: 'coibfe_issinc', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },

    { name: 'title', type: 'string' },
    { name: 'body', type: 'string', isOptional: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type CoibfeCoibfeRaw = {
  coibfeid: string;
  coibfekey?: string;
  coibfetoken?: string;
  coibfecodigov: string;
  coibfedestino: string;
  coibfefinalidad: string;
  coibfetransporte: string;
  coibfeaninovillos: string;
  coibfeanitoros: string;
  coibfeanivacas: string;
  coibfeanivaquillas: string;
  coibfeaniotros: string;
  coibfeanitotal: string;
  coibfeanihilton: string;
  coibfetecnico_vpa_id: string;
  coibfetecniconame: string;
  coibfefrigorificoname: string;
  coibfefrigorifico_id: string;
  coibfeproductorname: string;
  coibfeproductor_id: string;
  coibfeproductorsitrap?: string;
  coibfepropriedadname: string;
  coibfepropriedad_id?: string;
  coibfepropriedadsigor: string;
  coibfepropriedadsitrap?: string;
  coibfepropriedaddepartamento?: string;
  coibfepropriedaddistrito?: string;
  coibfepropriedad_productor_id?: string;
  coibfeprecinto1: string;
  coibfeprecinto2?: string;
  coibfeprecinto3?: string;
  coibfepos_id?: string;
  coibfeposlatitud: string;
  coibfeposlongitud: string;
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
  created_at?: any;
  updated_at?: any;

  title: string;
  body: string;
  server_id?: number;
};

export default coibfeCoibfeSchema;
