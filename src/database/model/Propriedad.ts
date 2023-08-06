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

class Propriedad extends Model {
  static table = 'propriedads';
  @field('propriedadname') propriedadname!: string;
  @field('propriedadpropietario') propriedadpropietario!: string;
  @field('propriedadstatus') propriedadstatus!: string;
  @field('propriedadsigor') propriedadsigor!: string;
  @field('propriedadsitrap') propriedadsitrap!: string;
  @field('propriedaddepartamento') propriedaddepartamento!: string;
  @field('propriedaddistrito') propriedaddistrito!: string;
  @field('dbversion')
  dbversion!: string;
  //@readonly
  @date('created_at')
  created_at?: any;
  //@readonly
  @date('updated_at')
  updated_at?: any;
}

export { Propriedad };
