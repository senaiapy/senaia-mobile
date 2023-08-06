/* eslint-disable unicorn/filename-case */

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

class Coibfe extends Model {
  static table = 'coibfes';

  @field('dbversion')
  dbversion!: string;

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
  coibfeprecinto2!: string;

  @field('coibfeprecinto3')
  coibfeprecinto3!: string;

  @field('coibfepos_id')
  coibfepos_id!: string;

  @field('coibfeposlatitud')
  coibfeposlatitud!: string;

  @field('coibfeposlongitud')
  coibfeposlongitud!: string;

  @field('coibfeposdate')
  coibfeposdate!: string;

  @field('coibfeposapikeymobile')
  coibfeposapikeymobile!: string;

  @field('coibfeobs')
  coibfeobs!: string;

  @field('coibfedocnroprop')
  coibfedocnroprop!: string;

  @field('coibfedocdigprop')
  coibfedocdigprop!: string;

  @field('coibfedocorigabrev')
  coibfedocorigabrev!: string;

  @field('coibfedoctipoabrev')
  coibfedoctipoabrev!: string;

  @field('coibfeerrocode')
  coibfeerrocode!: string;

  @field('coibfeerromessage')
  coibfeerromessage!: string;

  @field('coibfeanimales')
  coibfeanimales!: string;

  @field('coibfe_issinc')
  coibfe_issinc!: string;

  //@readonly
  @date('created_at')
  created_at?: any;

  //@readonly
  @date('updated_at')
  updated_at?: any;
}

export { Coibfe };
