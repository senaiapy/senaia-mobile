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

class Productor extends Model {
  static table = 'productors';

  @field('productorname') productorname!: string;
  @field('productor_id') productor_id!: string;
  @field('productortoken') productortoken!: string;
  @field('productorsitrap') productorsitrap!: string;
  @field('productoracreditacion') productoracreditacion!: string;
  @field('productor_propriedad_id') productor_propriedad_id!: string;
  @field('productorpassword') productorpassword!: string;
  @field('productormail') productormail!: string;
  @field('productorphone') productorphone!: string;
  @field('productorissync') productorissync!: string;

  @field('dbversion')
  dbversion!: string;

  //@readonly
  @date('createdat')
  createdat: any;

  //@readonly
  @date('updatedat')
  updatedat: any;
}

export { Productor };
