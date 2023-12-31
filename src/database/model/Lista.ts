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

class Lista extends Model {
  static table = 'listas';

  @field('status')
  status!: string;

  @field('group')
  group!: string;

  @field('id_')
  id_!: string;

  @field('logo')
  logo!: string;

  @field('name')
  name!: string;

  @field('url')
  url!: string;

  @field('modelClass')
  modelClass!: string;

  @field('token')
  token!: string;

  @field('dbversion')
  dbversion!: string;

  //@readonly
  @date('created_at')
  created_at?: any;

  //@readonly
  @date('updated_at')
  updated_at?: any;
}

export { Lista };
