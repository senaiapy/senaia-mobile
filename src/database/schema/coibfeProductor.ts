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

const coibfeProductorSchema = tableSchema({
  name: 'coibfeproductors',
  columns: [
    { name: 'productorname', type: 'string' },
    { name: 'productor_id', type: 'string' },
    { name: 'productortoken', type: 'string' },
    { name: 'productorsitrap', type: 'string' },
    { name: 'productoracreditacion', type: 'string' },
    { name: 'productor_propriedad_id', type: 'string' },
    { name: 'productorpassword', type: 'string' },
    { name: 'productormail', type: 'string' },
    { name: 'productorphone', type: 'string' },
    { name: 'productorissync', type: 'string' },
    { name: 'dbversion', type: 'string' },
    { name: 'createdat', type: 'string' },
    { name: 'updatedat', type: 'string' },

    { name: 'body', type: 'string' },
    { name: 'post_id', type: 'string', isIndexed: true },
    { name: 'server_id', type: 'number', isOptional: true },

    { name: 'productordocnroprop', type: 'string' },
    { name: 'productordocdigprop', type: 'string' },
    { name: 'productordocorigabrev', type: 'string' },
    { name: 'productordoctipoabrev', type: 'string' },
    { name: 'productorstatus', type: 'string' },
    { name: 'productormessages', type: 'string' },
    { name: 'productorkeyprivate', type: 'string' },
    { name: 'productorapikeysoftware', type: 'string' },
  ],
});

export type CoibfeProductorRaw = {
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

  body?: string;
  post_id?: string;
  server_id?: number;

  productordocnroprop?: string;
  productordocdigprop?: string;
  productordocorigabrev?: string;
  productordoctipoabrev?: string;
  productorstatus?: string;
  productormessages?: string;
  productorkeyprivate?: string;
  productorapikeysoftware?: string;
};

export default coibfeProductorSchema;
