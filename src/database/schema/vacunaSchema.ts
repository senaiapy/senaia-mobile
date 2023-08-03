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

const vacunaSchema = tableSchema({
  name: 'vacunas',
  columns: [
    { name: 'vacunaId', type: 'string' },
    { name: 'vacunaUniqueId', type: 'string' },
    { name: 'vacuna_company', type: 'string' },
    { name: 'vacuna_lote', type: 'string' },
    { name: 'vacuna_codigo', type: 'string' },
    { name: 'vacuna_nome', type: 'string' },
    { name: 'vacuna_edad', type: 'string' },
    { name: 'vacuna_caravana', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },

    { name: 'title', type: 'string' },
    { name: 'body', type: 'string', isOptional: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type VacunaRaw = {
  dbversion?: string;
  vacunaId?: string;
  vacunaUniqueId: string;
  vacuna_company?: string;
  vacuna_lote?: string;
  vacuna_codigo?: string;
  vacuna_nome?: string;
  vacuna_edad?: string;
  vacuna_caravana?: string;
  createdAt: any;
  updatedAt: any;

  title: string;
  body: string;
  server_id?: number;
};

export default vacunaSchema;
