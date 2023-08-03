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

import type { EntradaRaw } from '../schema/entradaSchema';

class Entrada extends Model {
  static table = 'entradas';

  // @ts-ignore
  _raw!: RawRecord & EntradaRaw;

  @field('entradaId') entradaId?: string;
  @field('entrada_UniqueId') entrada_UniqueId!: string;
  @field('entrada_company') entrada_company?: string;
  @field('entrada_guia') entrada_guia?: string;
  @field('entrada_lote') entrada_lote?: string;
  @field('entrada_caravana') entrada_caravana?: string;
  @field('entrada_numero_anterior') entrada_numero_anterior?: string;
  @field('entrada_sigla_anterior') entrada_sigla_anterior?: string;
  @field('entrada_corral_origem') entrada_corral_origem?: string;
  @field('entrada_dispositivo_anterior') entrada_dispositivo_anterior?: string;
  @field('entrada_color_anterior') entrada_color_anterior?: string;
  @field('entrada_numero_actual') entrada_numero_actual?: string;
  @field('entrada_sigla_actual') entrada_sigla_actual?: string;
  @field('entrada_dispositivo_actual') entrada_dispositivo_actual?: string;
  @field('entrada_color_actual') entrada_color_actual?: string;
  @field('entrada_angus') entrada_angus?: string;
  @field('entrada_peso_actual') entrada_peso_actual?: string;
  @field('entrada_categoria') entrada_categoria?: string;
  @field('entrada_fecha_entrada') entrada_fecha_entrada?: string;
  @field('entrada_fecha_aplicaccion') entrada_fecha_aplicaccion?: string;
  @field('entrada_corral_actual') entrada_corral_actual?: string;
  @field('entrada_modalidade') entrada_modalidade?: string;
  @field('entrada_propietario_origem') entrada_propietario_origem?: string;
  @field('entrada_ms_cab_dia') entrada_ms_cab_dia?: string;
  @field('entrada_costo_compra') entrada_costo_compra?: string;
  @field('entrada_costo_diario') entrada_costo_diario?: string;
  @field('entrada_costo_curativo') entrada_costo_curativo?: string;
  @field('entrada_costo_protocolo') entrada_costo_protocolo?: string;

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

export default Entrada;
