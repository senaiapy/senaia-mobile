/* eslint-disable unicorn/filename-case */
// ########################################
/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-02-09 12:39:09
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:53:30
 * @ Description:
 */

import { tableSchema } from '@nozbe/watermelondb';

const pesoSchema = tableSchema({
  name: 'pesos',
  columns: [
    { name: 'pesoId', type: 'string' },
    { name: 'pesoUniqueId', type: 'string' },
    { name: 'peso_company', type: 'string' },
    { name: 'pesoPesoActual', type: 'string' },
    { name: 'pesoPesoFinal', type: 'string' },
    { name: 'pesoPesoEntrada', type: 'string' },
    { name: 'pesoEdad', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },

    { name: 'title', type: 'string' },
    { name: 'body', type: 'string', isOptional: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type PesoRaw = {
  dbversion?: string;
  pesoId?: string;
  pesoUniqueId: string;
  peso_company?: string;
  pesoPesoActual?: string;
  pesoPesoFinal?: string;
  pesoPesoEntrada?: string;
  pesoEdad?: string;
  created_at?: any;
  updated_at?: any;

  title: string;
  body: string;
  server_id?: number;
};

export default pesoSchema;
