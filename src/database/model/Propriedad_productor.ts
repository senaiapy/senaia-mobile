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

class Propriedad_productor extends Model {
  static table = 'propriedad_productors';

  @field('propriedadsigor') propriedadsigor!: string;
  @field('productor_id') productor_id!: string;
  @field('coibfeid') coibfeid!: string;
  @field('propriedad_productorissync') propriedad_productorissync!: string;

  @field('dbversion')
  dbversion!: string;

  //@readonly
  @date('createdat')
  createdat: any;

  //@readonly
  @date('updatedat')
  updatedat: any;
}

export { Propriedad_productor };
