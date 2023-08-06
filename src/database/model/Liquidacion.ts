/* eslint-disable unicorn/filename-case */
// ########################################
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

import type { LiquidacionRaw } from '../schema/liquidacionSchema';
class Liquidacion extends Model {
  static table = 'liquidacions';

  // @ts-ignore
  _raw!: RawRecord & LiquidacionRaw;

  @field('liquidacionId') liquidacionId!: string;
  @field('liquidacionUniqueId') liquidacionUniqueId!: string;
  @field('liquidacion_company') liquidacion_company!: string;
  @field('liquidacionGuias') liquidacionGuias!: string;
  @field('liquidacionCantidad') liquidacionCantidad!: string;
  @field('liquidacionFaena_kg_total') liquidacionFaena_kg_total!: string;
  @field('liquidacionPromedio_animal') liquidacionPromedio_animal!: string;
  @field('liquidacionPrecio_venta') liquidacionPrecio_venta!: string;
  @field('liquidacionFecha_salida') liquidacionFecha_salida!: string;
  @field('liquidacionFecha_faena') liquidacionFecha_faena!: string;
  @field('liquidacionPrecio_kg_carcasa') liquidacionPrecio_kg_carcasa!: string;
  @field('liquidacionPrecio_total') liquidacionPrecio_total!: string;

  @field('dbversion')
  dbversion!: string;

  //@readonly
  @date('created_at')
  created_at?: any;

  //@readonly
  @date('updated_at')
  updated_at?: any;

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

export default Liquidacion;
