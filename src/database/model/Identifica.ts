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

import type { RawRecord } from '@nozbe/watermelondb';
import { Model } from '@nozbe/watermelondb';
import { date, field, text, writer } from '@nozbe/watermelondb/decorators';

import type { IdentificaRaw } from '../schema/identificaSchema';
class Identifica extends Model {
  static table = 'identificas';

  // @ts-ignore
  _raw!: RawRecord & IdentificaRaw;

  @field('identificaId') identificaId?: string;
  @field('identificaUniqueId') identificaUniqueId!: string;
  @field('identificaIdAnimal') identificaIdAnimal?: string;
  @field('identificaNroTag') identificaNroTag?: string;
  @field('identificaIdTecnico') identificaIdTecnico?: string;
  @field('identificaNumeroIdentificador')
  identificaNumeroIdentificador?: string;
  @field('identificaDataNascimento') identificaDataNascimento?: string;
  @field('identificaSexo') identificaSexo?: string;
  @field('identificaIdRaca') identificaIdRaca?: string;
  @field('identificaMarcaFogo') identificaMarcaFogo?: string;
  @field('identificaLatitude') identificaLatitude?: string;
  @field('identificaLongitude') identificaLongitude?: string;
  @field('identificaCarimbo') identificaCarimbo?: string;
  @field('identificaLoteVacina') identificaLoteVacina?: string;
  @field('identificaPeso') identificaPeso?: string;
  @field('identificaCodErro') identificaCodErro?: string;
  @field('identificaDataIdentificacao') identificaDataIdentificacao?: string;

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

  @writer
  async delete() {
    await this.destroyPermanently();
  }
}

export default Identifica;
