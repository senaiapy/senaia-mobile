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

class Nfts extends Model {
  static table = 'nftss';

  @field('dbversion')
  dbversion!: string;

  @field('nfts_id')
  nfts_id!: string;

  @field('nfts_wallets_id')
  nfts_wallets_id!: string;

  @field('nfts_name')
  nfts_name!: string;

  @field('nfts_value')
  nfts_value!: string;

  @field('nfts_chain')
  nfts_chain!: string;

  //@readonly
  @date('created_at')
  created_at?: any;

  //@readonly
  @date('updated_at')
  updated_at?: any;
}

export { Nfts };
