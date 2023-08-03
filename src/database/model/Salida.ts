/* eslint-disable unicorn/filename-case */
// ########################################
/**
 // ########################################

 * @ Create Time: 2022-02-09 12:39:09
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:53:23
 * @ Description:
 */

import type { RawRecord } from '@nozbe/watermelondb';
import { Model } from '@nozbe/watermelondb';
import { date, field, text, writer } from '@nozbe/watermelondb/decorators';

import type { SalidaRaw } from '../schema/salidaSchema';
class Salida extends Model {
  static table = 'salidas';

  // @ts-ignore
  _raw!: RawRecord & SalidaRaw;

  @field('salidaId') salidaId?: string;
  @field('salida_UniqueId') salida_UniqueId!: string;
  @field('salida_company') salida_company?: string;
  @field('salida_guia') salida_guia?: string;
  @field('salida_caravana') salida_caravana?: string;
  @field('entrada_fecha_entrada') entrada_fecha_entrada?: string;
  @field('entrada_modalidade') entrada_modalidade?: string;
  @field('salida_ms_cab_dia') salida_ms_cab_dia?: string;
  @field('salida_costo_compra') salida_costo_compra?: string;
  @field('salida_costo_diaria') salida_costo_diaria?: string;
  @field('salida_costo_curativo') salida_costo_curativo?: string;
  @field('salida_costo_protocolo') salida_costo_protocolo?: string;
  @field('salida_corral') salida_corral?: string;
  @field('salida_peso_entrada') salida_peso_entrada?: string;
  @field('salida_categoria') salida_categoria?: string;
  @field('salida_angus') salida_angus?: string;
  @field('salida_propietario_origem') salida_propietario_origem?: string;
  @field('salida_peso_salida') salida_peso_salida?: string;
  @field('salida_dias_confinamento') salida_dias_confinamento?: string;
  @field('salida_lote') salida_lote?: string;
  @field('salida_fecha_salida') salida_fecha_salida?: string;
  @field('salida_peso_proyectado') salida_peso_proyectado?: string;
  @field('salida_cms_pv') salida_cms_pv?: string;
  @field('salida_cms_total') salida_cms_total?: string;
  @field('salida_gmd') salida_gmd?: string;
  @field('salida_destino') salida_destino?: string;
  @field('salida_controlador') salida_controlador?: string;
  @field('salida_tipo_salida') salida_tipo_salida?: string;
  @field('salida_cantidad') salida_cantidad?: string;
  @field('salida_nombre_identificaccion')
  salida_nombre_identificaccion?: string;
  @field('salida_custo_total') salida_custo_total?: string;

  @field('dbversion')
  dbversion?: string;

  //@readonly
  @date('createdAt')
  createdAt?: any;

  //@readonly
  @date('updatedAt')
  updatedAt?: any;

  @text('title')
  title?: string;

  @text('body')
  body?: string;

  @field('server_id')
  serverId?: number;

  @writer
  async delete() {
    await this.destroyPermanently();
  }
}

export default Salida;
