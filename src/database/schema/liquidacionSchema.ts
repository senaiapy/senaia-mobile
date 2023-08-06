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

const liquidacionSchema = tableSchema({
  name: 'liquidacions',
  columns: [
    { name: 'liquidacionId', type: 'string' },
    { name: 'liquidacionUniqueId', type: 'string' },
    { name: 'liquidacion_company', type: 'string' },
    { name: 'liquidacionGuias', type: 'string' },
    { name: 'liquidacionCantidad', type: 'string' },
    { name: 'liquidacionFaena_kg_total', type: 'string' },
    { name: 'liquidacionPromedio_animal', type: 'string' },
    { name: 'liquidacionPrecio_venta', type: 'string' },
    { name: 'liquidacionFecha_salida', type: 'string' },
    { name: 'liquidacionFecha_faena', type: 'string' },
    { name: 'liquidacionPrecio_kg_carcasa', type: 'string' },
    { name: 'liquidacionPrecio_total', type: 'string' },
    { name: 'dbversion', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },

    { name: 'title', type: 'string' },
    { name: 'body', type: 'string', isOptional: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type LiquidacionRaw = {
  dbversion?: string;
  liquidacionId?: string;
  liquidacionUniqueId?: string;
  liquidacion_company?: string;
  liquidacionGuias?: string;
  liquidacionCantidad?: string;
  liquidacionFaena_kg_total?: string;
  liquidacionPromedio_animal?: string;
  liquidacionPrecio_venta?: string;
  liquidacionFecha_salida?: string;
  liquidacionFecha_faena?: string;
  liquidacionPrecio_kg_carcasa?: string;
  liquidacionPrecio_total?: string;
  created_at?: any;
  updated_at?: any;

  title: string;
  body: string;
  server_id?: number;
};

export default liquidacionSchema;
