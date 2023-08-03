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
import { field } from '@nozbe/watermelondb/decorators';

class Authenticate extends Model {
  static table = 'authenticates';

  @field('dbversion')
  dbversion!: string;

  @field('userId')
  userId!: string;

  @field('user_vpa_id')
  user_vpa_id!: string;

  @field('user_name')
  user_name!: string;

  @field('user_password')
  user_password!: string;

  @field('user_mac')
  user_mac!: string;

  @field('user_status')
  user_status!: string;

  @field('user_locked')
  user_locked!: string;

  @field('user_system_type')
  user_system_type!: string;

  @field('user_nome')
  user_nome!: string;

  @field('user_vpa')
  user_vpa!: string;

  @field('user_senha')
  user_senha!: string;

  @field('user_cpf')
  user_cpf!: string;

  @field('user_id')
  user_id!: string;

  @field('user_token')
  user_token!: string;

  @field('user_key')
  user_key!: string;

  @field('userToken')
  userToken!: string;

  @field('user_register')
  user_register!: string;

  @field('userChatId')
  userChatId!: string;

  @field('userDeviceStatus')
  userDeviceStatus!: string;

  @field('userKeyPrivate')
  userKeyPrivate!: string;

  @field('userApiKeyHardware')
  userApiKeyHardware!: string;
}

export { Authenticate };
