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

class Tecnico extends Model {
  static table = 'tecnicos';

  @field('tecnicoid')
  tecnicoid!: string;

  @field('tecnicoemail')
  tecnicoemail!: string;

  @field('tecnicophone')
  tecnicophone!: string;

  @field('tecnicouniqueid')
  tecnicouniqueid!: string;

  @field('tecnicolocked')
  tecnicolocked!: string;

  @field('tecnicoservername')
  tecnicoservername!: string;

  @field('tecnico_vpa_id')
  tecnico_vpa_id!: string;

  @field('tecnico_name')
  tecnico_name!: string;

  @field('tecnico_register')
  tecnico_register!: string;

  @field('tecnico_password')
  tecnico_password!: string;

  @field('tecnico_mac')
  tecnico_mac!: string;

  @field('tecnico_status')
  tecnico_status!: string;

  @field('tecnico_key')
  tecnico_key!: string;

  @field('tecnicoapikeymobile')
  tecnicoapikeymobile!: string;

  @field('tecnicoapikeysoftware')
  tecnicoapikeysoftware!: string;

  @field('tecnicokeyprivate')
  tecnicokeyprivate!: string;

  @field('tecnicolevelaccess')
  tecnicolevelaccess!: string;

  @field('tecnicotoken')
  tecnicotoken!: string;

  @field('tecnicodevicestatus')
  tecnicodevicestatus!: string;

  @field('tecnicoapikeyhardware')
  tecnicoapikeyhardware!: string;

  @field('tecnicopermission')
  tecnicopermission!: string;

  @field('tecnicoaddress')
  tecnicoaddress!: string;

  @field('user_system_type')
  user_system_type?: string;

  //@readonly
  @date('created_at')
  created_at?: any;

  //@readonly
  @date('updated_at')
  updated_at?: any;
}

export { Tecnico };
