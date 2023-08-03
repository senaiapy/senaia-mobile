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

class Wallets extends Model {
  static table = 'walletss';

  @field('first_name')
  first_name!: string;

  @field('last_name')
  last_name!: string;

  @field('address')
  address!: string;

  @field('customerUniqueId')
  customerUniqueId!: string;

  @field('customerLocked')
  customerLocked!: string;

  @field('customerServerName')
  customerServerName!: string;

  @field('customer_vpa_id')
  customer_vpa_id!: string;

  @field('customer_name')
  customer_name!: string;

  @field('customer_register')
  customer_register!: string;

  @field('customer_password')
  customer_password!: string;

  @field('customer_mac')
  customer_mac!: string;

  @field('customer_status')
  customer_status!: string;

  @field('customer_key')
  customer_key!: string;

  @field('customerApiKeyMobile')
  customerApiKeyMobile!: string;

  @field('customerApiKeySoftware')
  customerApiKeySoftware!: string;

  @field('customerKeyPrivate')
  customerKeyPrivate!: string;

  @field('customerLevelAccess')
  customerLevelAccess!: string;

  @field('customerToken')
  customerToken!: string;

  @field('customerDeviceStatus')
  customerDeviceStatus!: string;

  @field('customerApiKeyHardware')
  customerApiKeyHardware!: string;

  @field('customerPermission')
  customerPermission!: string;

  @field('customerAddress')
  customerAddress!: string;

  @field('avatar_id')
  avatar_id!: string;

  @field('avatar_face')
  avatar_face!: string;

  @field('wallet_id')
  wallet_id!: string;

  @field('stateAbbr')
  stateAbbr!: string;

  @field('city')
  city!: string;

  @field('zipcode')
  zipcode!: string;

  @field('avatar')
  avatar!: string;

  @field('birthday')
  birthday!: string;

  @field('first_seen')
  first_seen!: string;

  @field('last_seen')
  last_seen!: string;

  @field('has_ordered')
  has_ordered!: string;

  @field('latest_purchase')
  latest_purchase!: string;

  @field('has_newsletter')
  has_newsletter!: string;

  @field('groups')
  groups!: string;

  @field('nb_commands')
  nb_commands!: any;

  @field('total_spent')
  total_spent!: any;

  //@readonly
  @date('createdAt')
  createdAt: any;

  //@readonly
  @date('updatedAt')
  updatedAt: any;
}

export { Wallets };
