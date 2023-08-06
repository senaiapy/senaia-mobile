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

class Tokens extends Model {
  static table = 'tokenss';

  @field('dbversion')
  dbversion!: string;

  @field('tokens_id')
  tokens_id!: string;

  @field('tokens_wallets_id')
  tokens_wallets_id!: string;

  @field('tokens_name')
  tokens_name!: string;

  @field('tokens_symbol')
  tokens_symbol!: string;

  @field('tokens_type')
  tokens_type!: string;

  @field('tokens_decimal')
  tokens_decimal!: string;

  @field('tokens_balance')
  tokens_balance!: string;

  @field('tokens_price')
  tokens_price!: string;

  @field('tokens_logo')
  tokens_logo!: string;

  @field('tokens_chain')
  tokens_chain!: string;

  //@readonly
  @date('created_at')
  created_at?: any;

  //@readonly
  @date('updated_at')
  updated_at?: any;
}

export { Tokens };
