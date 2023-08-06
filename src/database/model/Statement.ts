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

class Statement extends Model {
  static table = 'statements';

  @field('dbversion')
  dbversion!: string;

  @date('data')
  data: any;

  @field('type')
  type!: string;

  @field('amount')
  amount!: string;

  @field('description')
  description!: string;

  @field('total')
  total!: string;

  @field('wallets_id')
  wallets_id!: string;

  @field('customer_id')
  customer_id!: string;

  //@readonly
  @date('created_at')
  created_at?: any;

  //@readonly
  @date('updated_at')
  updated_at?: any;
}

export { Statement };
