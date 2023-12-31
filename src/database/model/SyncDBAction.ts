/* eslint-disable unicorn/filename-case */

// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
//* @ Create Time: 2022-08-04 12:39:09
// ########################################

import type { RawRecord, Relation } from '@nozbe/watermelondb';
import { associations, Model } from '@nozbe/watermelondb';
import { field, immutableRelation, json } from '@nozbe/watermelondb/decorators';
import { identity } from 'rxjs';

import type {
  CoibfeCoibfesPayload,
  CoibfeFrigorificoPayload,
  CoibfeProductorPayload,
  CoibfePropriedadPayload,
} from '@/services/coibfeSync/apis';

import type { CoibfeActionRaw } from '../schema/coibfeAction';
import type CoibfeCoibfeModel from './CoibfeCoibfe';
import type CoibfeFrigorificoModel from './CoibfeFrigorifico';
import type CoibfeProductorModel from './CoibfeProductor';
import type CoibfePropriedadModel from './CoibfePropriedad';

export type CoibfeActionType =
  | 'CREATE_COIBFEPROPRIEDAD'
  | 'DELETE_COIBFEPROPRIEDAD'
  | 'CREATE_COIBFEPRODUCTOR'
  | 'DELETE_COIBFEPRODUCTOR'
  | 'CREATE_COIBFEFRIGORIFICO'
  | 'DELETE_COIBFEFRIGORIFICO'
  | 'CREATE_COIBFECOIBFE'
  | 'DELETE_COIBFECOIBFE';

export type SyncCoibfeAction = Omit<CoibfeActionModel, 'payload'> &
  (
    | { type: 'CREATE_COIBFEPROPRIEDAD'; payload: CoibfePropriedadPayload }
    | { type: 'DELETE_COIBFEPROPRIEDAD' }
    | { type: 'CREATE_COIBFEPRODUCTOR'; payload: CoibfeProductorPayload }
    | { type: 'DELETE_COIBFEPRODUCTOR' }
    | { type: 'CREATE_COIBFEFRIGORIFICO'; payload: CoibfeFrigorificoPayload }
    | { type: 'DELETE_COIBFEFRIGORIFICO' }
    | { type: 'CREATE_COIBFECOIBFE'; payload: CoibfeCoibfesPayload }
    | { type: 'DELETE_COIBFECOIBFE' }
  );

class CoibfeActionModel extends Model {
  static table = 'coibfeactions';

  static associations = associations(
    ['coibfepropriedads', { type: 'belongs_to', key: 'propriedadSigor' }],
    ['coibfeproductors', { type: 'belongs_to', key: 'productor_id' }],
    ['coibfefrigorificos', { type: 'belongs_to', key: 'frigorifico_id' }],
    ['coibfecoibfes', { type: 'belongs_to', key: 'coibfeid' }]
  );

  // @ts-ignore
  _raw!: RawRecord & CoibfeActionRaw;

  @field('type')
  type!: CoibfeActionType;

  @json('payload', identity)
  payload?: any;

  @immutableRelation('coibfeproductors', 'productor_id')
  coibfeproductor!: Relation<CoibfeProductorModel>;

  @immutableRelation('coibfepropriedads', 'propriedadSigor')
  coibfepropriedad!: Relation<CoibfePropriedadModel>;

  @immutableRelation('coibfefrigorificos', 'frigorifico_id')
  coibfefrigorifico!: Relation<CoibfeFrigorificoModel>;

  @immutableRelation('coibfecoibfes', 'coibfeid')
  coibfecoibfe!: Relation<CoibfeCoibfeModel>;
}

export default CoibfeActionModel;
