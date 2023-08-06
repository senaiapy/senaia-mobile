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

const entradaSchema = tableSchema({
  name: 'entradas',
  columns: [
    { name: 'entradaId', type: 'string' },
    { name: 'entrada_UniqueId', type: 'string' },
    { name: 'entrada_company', type: 'string' },
    { name: 'entrada_guia', type: 'string' },
    { name: 'entrada_lote', type: 'string' },
    { name: 'entrada_caravana', type: 'string' },
    { name: 'entrada_numero_anterior', type: 'string' },
    { name: 'entrada_sigla_anterior', type: 'string' },
    { name: 'entrada_corral_origem', type: 'string' },
    { name: 'entrada_dispositivo_anterior', type: 'string' },
    { name: 'entrada_color_anterior', type: 'string' },
    { name: 'entrada_numero_actual', type: 'string' },
    { name: 'entrada_sigla_actual', type: 'string' },
    { name: 'entrada_dispositivo_actual', type: 'string' },
    { name: 'entrada_color_actual', type: 'string' },
    { name: 'entrada_angus', type: 'string' },
    { name: 'entrada_peso_actual', type: 'string' },
    { name: 'entrada_categoria', type: 'string' },
    { name: 'entrada_fecha_entrada', type: 'string' },
    { name: 'entrada_fecha_aplicaccion', type: 'string' },
    { name: 'entrada_corral_actual', type: 'string' },
    { name: 'entrada_modalidade', type: 'string' },
    { name: 'entrada_propietario_origem', type: 'string' },
    { name: 'entrada_ms_cab_dia', type: 'string' },
    { name: 'entrada_costo_compra', type: 'string' },
    { name: 'entrada_costo_diario', type: 'string' },
    { name: 'entrada_costo_curativo', type: 'string' },
    { name: 'entrada_costo_protocolo', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },

    { name: 'title', type: 'string' },
    { name: 'body', type: 'string', isOptional: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type EntradaRaw = {
  dbversion?: string;
  entradaId?: string;
  entrada_UniqueId: string;
  entrada_company?: string;
  entrada_guia?: string;
  entrada_lote?: string;
  entrada_caravana?: string;
  entrada_numero_anterior?: string;
  entrada_sigla_anterior?: string;
  entrada_corral_origem?: string;
  entrada_dispositivo_anterior?: string;
  entrada_color_anterior?: string;
  entrada_numero_actual?: string;
  entrada_sigla_actual?: string;
  entrada_dispositivo_actual?: string;
  entrada_color_actual?: string;
  entrada_angus?: string;
  entrada_peso_actual?: string;
  entrada_categoria?: string;
  entrada_fecha_entrada?: string;
  entrada_fecha_aplicaccion?: string;
  entrada_corral_actual?: string;
  entrada_modalidade?: string;
  entrada_propietario_origem?: string;
  entrada_ms_cab_dia?: string;
  entrada_costo_compra?: string;
  entrada_costo_diario?: string;
  entrada_costo_curativo?: string;
  entrada_costo_protocolo?: string;
  created_at?: any;
  updated_at?: any;

  title: string;
  body: string;
  server_id?: number;
};

export default entradaSchema;
