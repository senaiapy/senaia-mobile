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

const generalSchema = tableSchema({
  name: 'generals',
  columns: [
    { name: 'generalId', type: 'string' },
    { name: 'generalUniqueId', type: 'string' },

    { name: 'general_vacuna', type: 'string' },
    { name: 'general_raza', type: 'string' },
    { name: 'general_classificacion', type: 'string' },
    { name: 'general_dispositivo', type: 'string' },
    { name: 'general_color', type: 'string' },
    { name: 'general_categoria', type: 'string' },
    { name: 'general_modalidad', type: 'string' },
    { name: 'general_destino', type: 'string' },
    { name: 'general_permission', type: 'string' },
    { name: 'general_1', type: 'string' },
    { name: 'general_2', type: 'string' },
    { name: 'general_3', type: 'string' },
    { name: 'general_4', type: 'string' },
    { name: 'general_5', type: 'string' },
    { name: 'general_6', type: 'string' },
    { name: 'general_7', type: 'string' },
    { name: 'general_8', type: 'string' },
    { name: 'general_9', type: 'string' },
    { name: 'general_10', type: 'string' },

    { name: 'general_is_sync', type: 'boolean' },
    { name: 'dbversion', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },

    { name: 'title', type: 'string' },
    { name: 'body', type: 'string', isOptional: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type GeneralRaw = {
  generalId?: string;
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
  created_at?: any;
  updated_at?: any;

  title: string;
  body: string;
  server_id?: number;
};

export default generalSchema;
