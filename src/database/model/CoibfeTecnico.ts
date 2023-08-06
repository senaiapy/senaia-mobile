/* eslint-disable unicorn/filename-case */
// ########################################// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
//* @ Create Time: 2022-08-04 12:39:09
// ########################################

import type { RawRecord } from '@nozbe/watermelondb';
import { Model } from '@nozbe/watermelondb';
import { date, field, text } from '@nozbe/watermelondb/decorators';

import type { CoibfeTecnicoRaw } from '../schema/coibfeTecnico';

class CoibfeTecnicoModel extends Model {
  static table = 'coibfetecnicos';

  // @ts-ignore
  _raw!: RawRecord & CoibfeTecnicoRaw;

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

  //@readonly
  @date('created_at')
  created_at?: any;

  //@readonly
  @date('updated_at')
  updated_at?: any;

  @text('title')
  title!: string;

  @text('body')
  body?: string;

  @field('server_id')
  serverId?: number;

  @field('user_system_type')
  user_system_type?: string;
}

export default CoibfeTecnicoModel;
