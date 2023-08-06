/* eslint-disable unicorn/filename-case */

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
 * @ Modified time: 2022-02-10 18:53:23
 * @ Description:
 */

import type { RawRecord } from '@nozbe/watermelondb';
import { Model } from '@nozbe/watermelondb';
import { date, field, text, writer } from '@nozbe/watermelondb/decorators';

import type { GeneralRaw } from '../schema/generalSchema';
class GeneralModel extends Model {
  static table = 'generals';

  // @ts-ignore
  _raw!: RawRecord & GeneralRaw;

  @field('generalId')
  generalId!: string;

  @field('generalUniqueId')
  generalUniqueId?: string;

  @field('general_vacuna')
  general_vacuna?: string;

  @field('general_raza')
  general_raza?: string;

  @field('general_classificacion')
  general_classificacion?: string;

  @field('general_dispositivo')
  general_dispositivo?: string;

  @field('general_color')
  general_color?: string;

  @field('general_categoria')
  general_categoria?: string;

  @field('general_modalidad')
  general_modalidad?: string;

  @field('general_destino')
  general_destino?: string;

  @field('general_permission')
  general_permission?: string;

  @field('general_1')
  general_1?: string;

  @field('general_2')
  general_2?: string;

  @field('general_3')
  general_3?: string;

  @field('general_4')
  general_4?: string;

  @field('general_5')
  general_5?: string;

  @field('general_6')
  general_6?: string;

  @field('general_7')
  general_7?: string;

  @field('general_8')
  general_8?: string;

  @field('general_9')
  general_9?: string;

  @field('general_10')
  general_10?: string;

  @field('general_is_sync')
  general_is_sync?: boolean;

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

export default GeneralModel;
