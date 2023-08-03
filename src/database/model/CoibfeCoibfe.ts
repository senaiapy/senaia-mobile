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

import type { CoibfeCoibfeRaw } from '../schema/coibfeCoibfe';

class CoibfeCoibfeModel extends Model {
  static table = 'coibfecoibfes';

  // @ts-ignore
  _raw!: RawRecord & CoibfeCoibfeRaw;

  @field('dbversion')
  dbversion?: string;

  @field('coibfeid')
  coibfeid!: string;

  @field('coibfekey')
  coibfekey!: string;

  @field('coibfetoken')
  coibfetoken!: string;

  @field('coibfecodigov')
  coibfecodigov!: string;

  @field('coibfedestino')
  coibfedestino!: string;

  @field('coibfefinalidad')
  coibfefinalidad!: string;

  @field('coibfetransporte')
  coibfetransporte!: string;

  @field('coibfeaninovillos')
  coibfeaninovillos!: string;

  @field('coibfeanitoros')
  coibfeanitoros!: string;

  @field('coibfeanivacas')
  coibfeanivacas!: string;

  @field('coibfeanivaquillas')
  coibfeanivaquillas!: string;

  @field('coibfeaniotros')
  coibfeaniotros!: string;

  @field('coibfeanitotal')
  coibfeanitotal!: string;

  @field('coibfeanihilton')
  coibfeanihilton!: string;

  @field('coibfetecnico_vpa_id')
  coibfetecnico_vpa_id!: string;

  @field('coibfetecniconame')
  coibfetecniconame!: string;

  @field('coibfefrigorificoname')
  coibfefrigorificoname!: string;

  @field('coibfefrigorifico_id')
  coibfefrigorifico_id!: string;

  @field('coibfeproductorname')
  coibfeproductorname!: string;

  @field('coibfeproductor_id')
  coibfeproductor_id!: string;

  @field('coibfeproductorsitrap')
  coibfeproductorsitrap!: string;

  @field('coibfepropriedadname')
  coibfepropriedadname!: string;

  @field('coibfepropriedad_id')
  coibfepropriedad_id!: string;

  @field('coibfepropriedadsigor')
  coibfepropriedadsigor!: string;

  @field('coibfepropriedadsitrap')
  coibfepropriedadsitrap!: string;

  @field('coibfepropriedaddepartamento')
  coibfepropriedaddepartamento!: string;

  @field('coibfepropriedaddistrito')
  coibfepropriedaddistrito!: string;

  @field('coibfepropriedad_productor_id')
  coibfepropriedad_productor_id!: string;

  @field('coibfeprecinto1')
  coibfeprecinto1!: string;

  @field('coibfeprecinto2')
  coibfeprecinto2?: string;

  @field('coibfeprecinto3')
  coibfeprecinto3?: string;

  @field('coibfepos_id')
  coibfepos_id!: string;

  @field('coibfeposlatitud')
  coibfeposlatitud!: string;

  @field('coibfeposlongitud')
  coibfeposlongitud!: string;

  @field('coibfeposdate')
  coibfeposdate!: string;

  @field('coibfeposapikeymobile')
  coibfeposapikeymobile?: string;

  @field('coibfeobs')
  coibfeobs?: string;

  @field('coibfedocnroprop')
  coibfedocnroprop?: string;

  @field('coibfedocdigprop')
  coibfedocdigprop?: string;

  @field('coibfedocorigabrev')
  coibfedocorigabrev?: string;

  @field('coibfedoctipoabrev')
  coibfedoctipoabrev?: string;

  @field('coibfeerrocode')
  coibfeerrocode?: string;

  @field('coibfeerromessage')
  coibfeerromessage?: string;

  @field('coibfeanimales')
  coibfeanimales?: string;

  @field('coibfe_issinc')
  coibfe_issinc?: string;

  //@readonly
  @date('createdAt')
  createdAt: any;

  //@readonly
  @date('updatedAt')
  updatedAt: any;

  @text('title')
  title?: string;

  @text('body')
  body?: string;

  @field('server_id')
  serverId?: number;

  @writer
  async delete() {
    await this.destroyPermanently();
  }
}

export default CoibfeCoibfeModel;
