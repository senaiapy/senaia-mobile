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

import type { PesoRaw } from '../schema/pesoSchema';
class Peso extends Model {
  static table = 'pesos';

  // @ts-ignore
  _raw!: RawRecord & PesoRaw;

  @field('pesoId')
  pesoId?: string;

  @field('pesoUniqueId')
  pesoUniqueId!: string;

  @field('peso_company')
  peso_company?: string;

  @field('pesoPesoActual')
  pesoPesoActual?: string;

  @field('pesoPesoFinal')
  pesoPesoFinal?: string;

  @field('pesoPesoEntrada')
  pesoPesoEntrada?: string;

  @field('pesoEdad')
  pesoEdad?: string;

  @field('dbversion')
  dbversion?: string;

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

export default Peso;
