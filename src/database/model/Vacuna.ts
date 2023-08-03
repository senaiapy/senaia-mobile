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

import type { VacunaRaw } from '../schema/vacunaSchema';
class Vacuna extends Model {
  static table = 'vacunas';

  // @ts-ignore
  _raw!: RawRecord & VacunaRaw;

  @field('vacunaId')
  vacunaId?: string;

  @field('vacunaUniqueId')
  vacunaUniqueId!: string;

  @field('vacuna_company')
  vacuna_company?: string;

  @field('vacuna_lote')
  vacuna_lote?: string;

  @field('vacuna_codigo')
  vacuna_codigo?: string;

  @field('vacuna_nome')
  vacuna_nome?: string;

  @field('vacuna_edad')
  vacuna_edad?: string;

  @field('vacuna_caravana')
  vacuna_caravana?: string;

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

export default Vacuna;
