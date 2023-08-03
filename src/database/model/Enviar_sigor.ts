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

class Enviar_sigor extends Model {
  static table = 'enviar_sigors';
  @field('coibfeId')
  coibfeId!: string;

  @field('coibfeDestino')
  coibfeDestino!: string;

  @field('coibfeFinalidad')
  coibfeFinalidad!: string;

  @field('coibfeTransporte')
  coibfeTransporte!: string;

  @field('coibfeAniNovillos')
  coibfeAniNovillos!: string;

  @field('coibfeAniToros')
  coibfeAniToros!: string;

  @field('coibfeAniVacas')
  coibfeAniVacas!: string;

  @field('coibfeAniVaquillas')
  coibfeAniVaquillas!: string;

  @field('coibfeAniOtros')
  coibfeAniOtros!: string;

  @field('coibfeAniHilton')
  coibfeAniHilton!: string;

  @field('coibfeTecnico_VPA_ID')
  coibfeTecnico_VPA_ID!: string;

  @field('coibfeFrigorifico_ID')
  coibfeFrigorifico_ID!: string;

  @field('coibfeProductor_ID')
  coibfeProductor_ID!: string;

  @field('coibfePropriedadSigor')
  coibfePropriedadSigor!: string;

  @field('coibfePropriedadSitrap')
  coibfePropriedadSitrap!: string;

  @field('coibfePrecinto1')
  coibfePrecinto1!: string;

  @field('coibfePrecinto2')
  coibfePrecinto2!: string;

  @field('coibfePrecinto3')
  coibfePrecinto3!: string;

  @field('coibfePosLatitud')
  coibfePosLatitud!: string;

  @field('coibfePosLongitud')
  coibfePosLongitud!: string;

  @field('coibfePosDate')
  coibfePosDate!: string;

  @field('coibfeDigNroProp')
  coibfeDigNroProp!: string;

  @field('coibfeDocNroProp')
  coibfeDocNroProp!: string;

  @field('coibfeDocOrigAbrev')
  coibfeDocOrigAbrev!: string;

  @field('coibfeDocTipoAbrev')
  coibfeDocTipoAbrev!: string;

  @field('dbversion')
  dbversion!: string;

  //@readonly
  @date('createdAt')
  createdAt: any;

  //@readonly
  @date('updatedAt')
  updatedAt: any;
}

export { Enviar_sigor };
