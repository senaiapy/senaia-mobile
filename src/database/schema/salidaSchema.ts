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

const salidaSchema = tableSchema({
  name: 'salidas',
  columns: [
    { name: 'salidaId', type: 'string' },
    { name: 'salida_UniqueId', type: 'string' },
    { name: 'salida_company', type: 'string' },
    { name: 'salida_guia', type: 'string' },
    { name: 'salida_caravana', type: 'string' },
    { name: 'entrada_fecha_entrada', type: 'string' },
    { name: 'entrada_modalidade', type: 'string' },
    { name: 'salida_ms_cab_dia', type: 'string' },
    { name: 'salida_costo_compra', type: 'string' },
    { name: 'salida_costo_diaria', type: 'string' },
    { name: 'salida_costo_curativo', type: 'string' },
    { name: 'salida_costo_protocolo', type: 'string' },
    { name: 'salida_corral', type: 'string' },
    { name: 'salida_peso_entrada', type: 'string' },
    { name: 'salida_categoria', type: 'string' },
    { name: 'salida_angus', type: 'string' },
    { name: 'salida_propietario_origem', type: 'string' },
    { name: 'salida_peso_salida', type: 'string' },
    { name: 'salida_dias_confinamento', type: 'string' },
    { name: 'salida_lote', type: 'string' },
    { name: 'salida_fecha_salida', type: 'string' },
    { name: 'salida_peso_proyectado', type: 'string' },
    { name: 'salida_cms_pv', type: 'string' },
    { name: 'salida_cms_total', type: 'string' },
    { name: 'salida_gmd', type: 'string' },
    { name: 'salida_destino', type: 'string' },
    { name: 'salida_controlador', type: 'string' },
    { name: 'salida_tipo_salida', type: 'string' },
    { name: 'salida_cantidad', type: 'string' },
    { name: 'salida_nombre_identificaccion', type: 'string' },
    { name: 'salida_custo_total', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },

    { name: 'title', type: 'string' },
    { name: 'body', type: 'string', isOptional: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type SalidaRaw = {
  dbversion?: string;
  salidaId?: string;
  salida_UniqueId: string;
  salida_company?: string;
  salida_guia?: string;
  salida_caravana?: string;
  entrada_fecha_entrada?: string;
  entrada_modalidade?: string;
  salida_ms_cab_dia?: string;
  salida_costo_compra?: string;
  salida_costo_diaria?: string;
  salida_costo_curativo?: string;
  salida_costo_protocolo?: string;
  salida_corral?: string;
  salida_peso_entrada?: string;
  salida_categoria?: string;
  salida_angus?: string;
  salida_propietario_origem?: string;
  salida_peso_salida?: string;
  salida_dias_confinamento?: string;
  salida_lote?: string;
  salida_fecha_salida?: string;
  salida_peso_proyectado?: string;
  salida_cms_pv?: string;
  salida_cms_total?: string;
  salida_gmd?: string;
  salida_destino?: string;
  salida_controlador?: string;
  salida_tipo_salida?: string;
  salida_cantidad?: string;
  salida_nombre_identificaccion?: string;
  salida_custo_total?: string;
  created_at?: any;
  updated_at?: any;

  title: string;
  body: string;
  server_id?: number;
};

export default salidaSchema;
