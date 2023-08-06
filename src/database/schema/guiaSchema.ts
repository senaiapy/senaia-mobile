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

const guiaSchema = tableSchema({
  name: 'guias',
  columns: [
    { name: 'guiaId', type: 'string' },
    { name: 'guiaUniqueId', type: 'string' },
    { name: 'guia_company', type: 'string' },
    { name: 'guiaOrden', type: 'string' },
    { name: 'guiaGuias', type: 'string' },
    { name: 'guiaContrato', type: 'string' },
    { name: 'guiaFechaEntrada', type: 'string' },
    { name: 'guiaCantidad', type: 'string' },
    { name: 'guiaOrigen', type: 'string' },
    { name: 'guiaCategoria', type: 'string' },
    { name: 'guiaCorral', type: 'string' },
    { name: 'guiaModalidad', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },

    { name: 'title', type: 'string' },
    { name: 'body', type: 'string', isOptional: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type GuiaRaw = {
  dbversion?: string;
  guiaId?: string;
  guiaUniqueId?: string;
  guia_company?: string;
  guiaOrden?: string;
  guiaGuias?: string;
  guiaContrato?: string;
  guiaFechaEntrada?: string;
  guiaCantidad?: string;
  guiaOrigen?: string;
  guiaCategoria?: string;
  guiaCorral?: string;
  guiaModalidad?: string;
  created_at?: any;
  updated_at?: any;

  title: string;
  body: string;
  server_id?: number;
};

export default guiaSchema;
