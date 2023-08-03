/* eslint-disable unicorn/filename-case */
// ########################################// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
//* @ Create Time: 2022-08-04 12:39:09
// ########################################

import type { Query, RawRecord } from '@nozbe/watermelondb';
import { Model } from '@nozbe/watermelondb';
import {
  children,
  date,
  field,
  text,
  writer,
} from '@nozbe/watermelondb/decorators';

import type { CoibfePropriedadRaw } from '../schema/coibfePropriedad';
import type CoibfeProductorModel from './CoibfeProductor';

class CoibfePropriedadModel extends Model {
  static table = 'coibfepropriedads';

  // static associations = associations(
  //   ['coibfeproductors', {type: 'has_many', foreignKey: 'productor_id'}],
  //   ['coibfeactions', {type: 'has_many', foreignKey: 'productor_id'}],
  // );

  // @ts-ignore
  _raw!: RawRecord & CoibfePropriedadRaw;

  @field('propriedadname') propriedadname!: string;
  @field('propriedadpropietario') propriedadpropietario?: string;
  @field('propriedadstatus') propriedadstatus?: string;
  @field('propriedadsigor') propriedadsigor!: string;
  @field('propriedadsitrap') propriedadsitrap!: string;
  @field('propriedaddepartamento') propriedaddepartamento?: string;
  @field('propriedaddistrito') propriedaddistrito?: string;
  @field('dbversion')
  dbversion?: string;
  //@readonly
  @date('createdat')
  createdat: any;
  //@readonly
  @date('updatedat')
  updatedat: any;

  @text('title')
  title?: string;

  @text('body')
  body?: string;

  @field('server_id')
  serverId?: number;

  @children('comments')
  comments?: Query<CoibfeProductorModel>;

  @text('propriedadproductors')
  propriedadproductors?: string;

  /*
  @writer
  async delete() {
    await this.markAsDeleted();

    await this.database
      .get<CoibfeActionModel>('coibfeactions')
      .create(action => {
        action.coibfepropriedad.set(this);
        action.type = 'DELETE_COIBFEPROPRIEDAD';
      });
  }

  @writer
  async addCoibfeProductor(body: string) {
    const coibfeproductor = await this.database
      .get<CoibfeProductorModel>('coibfeproductors')
      .create(coibfeproductor => {
        coibfeproductor.coibfepropriedad.set(this);
        coibfeproductor.body = body;
      });

    await this.database
      .get<CoibfeActionModel>('coibfeactions')
      .create(action => {
        action.coibfepropriedad.set(this);
        action.coibfeproductor.set(coibfeproductor);
        action.type = 'CREATE_COIBFEPRODUCTOR';
        action.payload = {body};
      });
  }
*/

  @writer
  async delete() {
    await this.destroyPermanently();
  }
}
export default CoibfePropriedadModel;
