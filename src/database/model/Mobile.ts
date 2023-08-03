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

class Mobile extends Model {
  static table = 'mobiles';

  @field('dbversion')
  dbversion!: string;

  //@readonly
  @date('createdAt')
  createdAt: any;

  //@readonly
  @date('updatedAt')
  updatedAt: any;
}

export { Mobile };
