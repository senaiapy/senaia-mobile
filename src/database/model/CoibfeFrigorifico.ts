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
import { date, field, text, writer } from '@nozbe/watermelondb/decorators';

import type { CoibfeFrigorificoRaw } from '../schema/coibfeFrigorifico';

class CoibfeFrigorificoModel extends Model {
  static table = 'coibfefrigorificos';

  // @ts-ignore
  _raw!: RawRecord & CoibfeFrigorificoRaw;

  @field('frigorificoname') frigorificoname!: string;
  @field('frigorifico_id') frigorifico_id!: string;
  @field('frigorificodepartamento') frigorificodepartamento?: string;
  @field('frigorificokeyprivate') frigorificokeyprivate?: string;
  @field('frigorificostatus') frigorificostatus?: string;
  @field('dbversion')
  dbversion?: string;
  //@readonly
  @date('created_at')
  created_at?: any;
  //@readonly
  @date('updated_at')
  updated_at?: any;

  @text('title')
  title?: string;

  @text('body')
  body?: string;

  @field('server_id')
  serverId?: number;

  @field('post_id')
  postId?: string;

  @writer
  async delete() {
    await this.destroyPermanently();
  }
}

export default CoibfeFrigorificoModel;
