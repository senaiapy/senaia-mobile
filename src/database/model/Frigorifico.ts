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

import { Model } from '@nozbe/watermelondb';
import { date, field } from '@nozbe/watermelondb/decorators';

class Frigorifico extends Model {
  static table = 'frigorificos';

  @field('frigorificoname') frigorificoname!: string;
  @field('frigorifico_id') frigorifico_id!: string;
  @field('frigorificodepartamento') frigorificodepartamento!: string;
  @field('frigorificokeyprivate') frigorificokeyprivate!: string;
  @field('frigorificostatus') frigorificostatus!: string;

  @field('dbversion')
  dbversion!: string;

  //@readonly
  @date('createdat')
  createdat: any;

  //@readonly
  @date('updatedat')
  updatedAt: any;
}

export { Frigorifico };
