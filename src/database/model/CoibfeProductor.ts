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

import type { CoibfeProductorRaw } from '../schema/coibfeProductor';

class CoibfeProductor extends Model {
  static table = 'coibfeproductors';

  // static associations = associations(
  //   ['coibfepropriedads', {type: 'belongs_to', key: 'productor_id'}],
  //   ['coibfeactions', {type: 'has_many', foreignKey: 'propriedadsigor'}],
  // );

  // @ts-ignore
  _raw!: RawRecord & CoibfeProductorRaw;

  @field('productorname') productorname!: string;
  @field('productor_id') productor_id!: string;
  @field('productortoken') productortoken?: string;
  @field('productorsitrap') productorsitrap?: string;
  @field('productoracreditacion') productoracreditacion?: string;
  @field('productor_propriedad_id') productor_propriedad_id?: string;
  @field('productorpassword') productorpassword?: string;
  @field('productormail') productormail?: string;
  @field('productorphone') productorphone?: string;
  @field('productorissync') productorissync?: string;
  @field('dbversion')
  dbversion?: string;
  //@readonly
  @date('created_at')
  created_at?: any;
  //@readonly
  @date('updated_at')
  updated_at?: any;

  @text('body')
  body?: string;

  @field('post_id')
  postId?: string;

  @field('server_id')
  serverId?: number;

  @field('productordocnroprop')
  productordocnroprop?: string;
  @field('productordocdigprop')
  productordocdigprop?: string;
  @field('productordocorigabrev')
  productordocorigabrev?: string;
  @field('productordoctipoabrev')
  productordoctipoabrev?: string;
  @field('productorstatus')
  productorstatus?: string;
  @field('productormessages')
  productormessages?: string;
  @field('productorkeyprivate')
  productorkeyprivate?: string;
  @field('productorapikeysoftware')
  productorapikeysoftware?: string;
  // @immutableRelation('coibfepropriedads', 'propriedadsigor')
  // coibfepropriedad!: Relation<CoibfePropriedadModel>;

  @writer
  async delete() {
    await this.destroyPermanently();
  }
}

export default CoibfeProductor;
