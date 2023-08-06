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

class Server extends Model {
  static table = 'servers';

  @field('serverConfig_name')
  serverConfig_name!: string;

  @field('serverConfigId')
  serverConfigId!: string;

  @field('serverConfigLocked')
  serverConfigLocked!: string;

  @field('serverConfigServerNameLocal')
  serverConfigServerNameLocal!: string;

  @field('serverConfigServerNameRemote')
  serverConfigServerNameRemote!: string;

  @field('serverConfigChatId')
  serverConfigChatId!: string;

  @field('serverConfig_key')
  serverConfig_key!: string;

  @field('serverConfigSendSigor')
  serverConfigSendSigor!: string;

  @field('dbversion')
  dbversion!: string;

  //@readonly
  @date('created_at')
  created_at?: any;

  //@readonly
  @date('updated_at')
  updated_at?: any;
}

export { Server };
