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

const razaSchema = tableSchema({
  name: 'razas',
  columns: [
    { name: 'razaId', type: 'string' },
    { name: 'razaUniqueId', type: 'string' },
    { name: 'raza_company', type: 'string' },
    { name: 'razaIdRaca', type: 'string' },
    { name: 'razaNomeRaca', type: 'string' },
    { name: 'razaOrdemExibicao', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },

    { name: 'title', type: 'string' },
    { name: 'body', type: 'string', isOptional: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type RazaRaw = {
  dbversion?: string;
  razaId: string;
  razaUniqueId?: string;
  raza_company?: string;
  razaIdRaca?: string;
  razaNomeRaca?: string;
  razaOrdemExibicao?: string;
  createdAt: any;
  updatedAt: any;

  title: string;
  body: string;
  server_id?: number;
};

export default razaSchema;
