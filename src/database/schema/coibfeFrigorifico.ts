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

const coibfeFrigorificoSchema = tableSchema({
  name: 'coibfefrigorificos',
  columns: [
    { name: 'frigorificoname', type: 'string' },
    { name: 'frigorifico_id', type: 'string' },
    { name: 'frigorificodepartamento', type: 'string' },
    { name: 'frigorificokeyprivate', type: 'string' },
    { name: 'frigorificostatus', type: 'string' },
    { name: 'dbversion', type: 'string' },
    { name: 'createdat', type: 'string' },
    { name: 'updatedat', type: 'string' },

    { name: 'title', type: 'string' },
    { name: 'body', type: 'string', isOptional: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type CoibfeFrigorificoRaw = {
  frigorificoname: string;
  frigorifico_id: string;
  frigorificodepartamento?: string;
  frigorificokeyprivate?: string;
  frigorificostatus?: string;

  title?: string;
  body?: string;
  server_id?: number;
};

export default coibfeFrigorificoSchema;
