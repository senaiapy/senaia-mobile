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

import type { RazaRaw } from '../schema/razaSchema';
class Raza extends Model {
  static table = 'razas';

  // @ts-ignore
  _raw!: RawRecord & RazaRaw;

  @field('razaId')
  razaId?: string;

  @field('razaUniqueId')
  razaUniqueId!: string;

  @field('raza_company')
  raza_company?: string;

  @field('razaIdRaca')
  razaIdRaca?: string;

  @field('razaNomeRaca')
  razaNomeRaca?: string;

  @field('razaOrdemExibicao')
  razaOrdemExibicao?: string;

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

export default Raza;
