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

const coibfePropriedadSchema = tableSchema({
  name: 'coibfepropriedads',
  columns: [
    { name: 'propriedadname', type: 'string' },
    { name: 'propriedadpropietario', type: 'string' },
    { name: 'propriedadstatus', type: 'string' },
    { name: 'propriedadsigor', type: 'string' },
    { name: 'propriedadsitrap', type: 'string' },
    { name: 'propriedaddepartamento', type: 'string' },
    { name: 'propriedaddistrito', type: 'string' },
    { name: 'dbversion', type: 'string' },
    { name: 'createdat', type: 'string' },
    { name: 'updatedat', type: 'string' },

    { name: 'propriedadproductors', type: 'string' },

    { name: 'title', type: 'string' },
    { name: 'body', type: 'string', isOptional: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type CoibfePropriedadRaw = {
  propriedadname: string;
  propriedadpropietario?: string;
  propriedadstatus?: string;
  propriedadsigor: string;
  propriedadsitrap?: string;
  propriedaddepartamento?: string;
  propriedaddistrito?: string;
  propriedadproductors?: string;

  title?: string;
  body?: string;
  server_id?: number;
};

export default coibfePropriedadSchema;
