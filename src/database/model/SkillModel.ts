/* eslint-disable unicorn/filename-case */
// ########################################// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################

import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export class SkillModel extends Model {
  static table = 'skills';

  @field('name')
  name!: string;

  @field('type')
  type!: string;
}
