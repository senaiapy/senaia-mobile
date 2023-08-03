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

import { Model } from '@nozbe/watermelondb';
import { date, field } from '@nozbe/watermelondb/decorators';

class Address extends Model {
  static table = 'addresss';

  @field('street')
  street!: string;

  @field('number')
  number!: string;

  @field('district')
  district!: string;

  @field('obs')
  obs!: string;

  @field('country')
  country!: string;

  @field('zip')
  zip!: string;

  @field('costumerId')
  costumerId!: string;

  @field('tecnicoId')
  tecnicoId!: string;

  //@readonly
  @date('createdAt')
  createdAt: any;

  //@readonly
  @date('updatedAt')
  updatedAt: any;
}

export { Address };
