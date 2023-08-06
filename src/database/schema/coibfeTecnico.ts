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

const coibfeTecnicoSchema = tableSchema({
  name: 'coibfetecnicos',
  columns: [
    { name: 'tecnicoid', type: 'string' },
    { name: 'tecnicoemail', type: 'string' },
    { name: 'tecnicophone', type: 'string' },
    { name: 'tecnicouniqueid', type: 'string' },
    { name: 'tecnicolocked', type: 'string' },
    { name: 'tecnicoservername', type: 'string' },
    { name: 'tecnico_vpa_id', type: 'string' },
    { name: 'tecnico_name', type: 'string' },
    { name: 'tecnico_register', type: 'string' },
    { name: 'tecnico_password', type: 'string' },
    { name: 'tecnico_mac', type: 'string' },
    { name: 'tecnico_status', type: 'string' },
    { name: 'tecnico_key', type: 'string' },
    { name: 'tecnicoapikeymobile', type: 'string' },
    { name: 'tecnicoapikeysoftware', type: 'string' },
    { name: 'tecnicokeyprivate', type: 'string' },
    { name: 'tecnicolevelaccess', type: 'string' },
    { name: 'tecnicotoken', type: 'string' },
    { name: 'tecnicodevicestatus', type: 'string' },
    { name: 'tecnicoapikeyhardware', type: 'string' },
    { name: 'tecnicopermission', type: 'string' },
    { name: 'tecnicoaddress', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
    { name: 'user_system_type', type: 'string' },

    { name: 'title', type: 'string' },
    { name: 'body', type: 'string', isOptional: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type CoibfeTecnicoRaw = {
  tecnicoid?: string;
  tecnicoemail?: string;
  tecnicophone?: string;
  tecnicouniqueid?: string;
  tecnicolocked?: string;
  tecnicoservername?: string;
  tecnico_vpa_id: string;
  tecnico_name: string;
  tecnico_register?: string;
  tecnico_password?: string;
  tecnico_mac?: string;
  tecnico_status?: string;
  tecnico_key?: string;
  tecnicoapikeymobile?: string;
  tecnicoapikeysoftware?: string;
  tecnicokeyprivate?: string;
  tecnicolevelaccess?: string;
  tecnicotoken?: string;
  tecnicodevicestatus?: string;
  tecnicoapikeyhardware?: string;
  tecnicopermission?: string;
  tecnicoaddress?: string;

  title: string;
  body: string;
  server_id?: number;
};

export default coibfeTecnicoSchema;
