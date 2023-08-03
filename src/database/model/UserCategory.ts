/* eslint-disable unicorn/filename-case */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
//* @ Create Time: 2022-08-04 12:39:09
// ########################################

import type { RawRecord } from '@nozbe/watermelondb';
import { Model } from '@nozbe/watermelondb';
import {
  date,
  field,
  readonly,
  text,
  writer,
} from '@nozbe/watermelondb/decorators';

import type { UserCategoryRaw } from '../schema/userCategory';

class UserCategoryModel extends Model {
  static table = 'userscategorys';

  // @ts-ignore
  _raw!: RawRecord & UserCategoryRaw;

  @field('user_id')
  user_id?: number;

  @field('key')
  key?: number;

  @field('title')
  title?: string;

  @text('name')
  name?: string;

  @field('address')
  address?: string;

  @field('price')
  price?: string;

  @text('description')
  description?: string;

  @text('photo')
  photo?: string;

  @text('star')
  star?: string;

  @text('reviews')
  reviews?: string;

  @field('category')
  category?: string;

  @field('img')
  img?: string;

  @text('other')
  other?: string;

  @field('dollar')
  dollar?: string;

  @field('cleaner')
  cleaner?: string;

  @field('users_category_sync')
  users_category_sync?: boolean;

  @field('server_id')
  serverId?: number;

  @readonly
  @date('created_at')
  created_at: any;

  @readonly
  @date('modified_at')
  modified_at: any;

  @writer
  async delete() {
    await this.destroyPermanently();
  }
}

export default UserCategoryModel;
