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

import type { RawRecord } from '@nozbe/watermelondb';
import { Model } from '@nozbe/watermelondb';
import { date, field, text, writer } from '@nozbe/watermelondb/decorators';

import type { AnimalRaw } from '../schema/animalSchema';
class Animal extends Model {
  static table = 'animals';

  // @ts-ignore
  _raw!: RawRecord & AnimalRaw;

  @field('dbversion')
  dbversion?: string;

  @field('animalId')
  animalId!: string;

  @field('animalUniqueId')
  animalUniqueId?: string;

  @field('animal_company')
  animal_company?: string;

  @field('animalNroTag')
  animalNroTag?: string;

  @field('animalDataNascimento')
  animalDataNascimento?: string;

  @field('animalDataQuarentena')
  animalDataQuarentena?: string;

  @field('animalIdRaca')
  animalIdRaca?: string;

  @field('animalSexo')
  animalSexo?: string;

  @field('animalIdClassificacao')
  animalIdClassificacao?: string;

  @field('animalUltimoPeso')
  animalUltimoPeso?: string;

  @field('animalDataUltimapesagem')
  animalDataUltimapesagem?: string;

  @field('animalListaNegra')
  animalListaNegra?: string;

  @field('animal_raza')
  animal_raza?: string;

  @field('animal_color')
  animal_color?: string;

  @field('animal_edad')
  animal_edad?: string;

  @field('animalProductor_ID')
  animalProductor_ID?: string;

  @field('animalPropriedad_ID')
  animalPropriedad_ID?: string;

  @field('animalMarcaFuego')
  animalMarcaFuego?: string;

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

  @writer
  async delete() {
    await this.destroyPermanently();
  }
}

export default Animal;
