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

import type { GuiaRaw } from '../schema/guiaSchema';
class Guia extends Model {
  static table = 'guias';

  // @ts-ignore
  _raw!: RawRecord & GuiaRaw;

  @field('guiaId') guiaId!: string;
  @field('guiaUniqueId') guiaUniqueId!: string;
  @field('guiaOrden') guiaOrden!: string;
  @field('guia_company') guia_company!: string;
  @field('guiaGuias') guiaGuias!: string;
  @field('guiaContrato') guiaContrato!: string;
  @field('guiaFechaEntrada') guiaFechaEntrada!: string;
  @field('guiaCantidad') guiaCantidad!: string;
  @field('guiaOrigen') guiaOrigen!: string;
  @field('guiaCategoria') guiaCategoria!: string;
  @field('guiaCorral') guiaCorral!: string;
  @field('guiaModalidad') guiaModalidad!: string;

  @field('dbversion')
  dbversion!: string;

  //@readonly
  @date('createdAt')
  createdAt: any;

  //@readonly
  @date('updatedAt')
  updatedAt: any;

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

export default Guia;
