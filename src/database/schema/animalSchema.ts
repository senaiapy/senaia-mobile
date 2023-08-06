/* eslint-disable unicorn/filename-case */
// ########################################
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
 * @ Modified time: 2022-02-10 18:53:30
 * @ Description:
 */

import { tableSchema } from '@nozbe/watermelondb';

const animalSchema = tableSchema({
  name: 'animals',
  columns: [
    { name: 'animalId', type: 'string' },
    { name: 'animalUniqueId', type: 'string' },
    { name: 'animal_company', type: 'string' },
    { name: 'animalNroTag', type: 'string' },
    { name: 'animalDataNascimento', type: 'string' },
    { name: 'animalDataQuarentena', type: 'string' },
    { name: 'animalIdRaca', type: 'string' },
    { name: 'animalSexo', type: 'string' },
    { name: 'animalIdClassificacao', type: 'string' },
    { name: 'animalUltimoPeso', type: 'string' },
    { name: 'animalDataUltimapesagem', type: 'string' },
    { name: 'animalListaNegra', type: 'string' },
    { name: 'animal_raza', type: 'string' },
    { name: 'animal_color', type: 'string' },
    { name: 'animal_edad', type: 'string' },
    { name: 'animalProductor_ID', type: 'string' },
    { name: 'animalPropriedad_ID', type: 'string' },
    { name: 'animalMarcaFuego', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },

    { name: 'title', type: 'string' },
    { name: 'body', type: 'string', isOptional: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type AnimalRaw = {
  dbversion?: string;
  animalId?: string;
  animalUniqueId: string;
  animal_company?: string;
  animalNroTag?: string;
  animalDataNascimento?: string;
  animalDataQuarentena?: string;
  animalIdRaca?: string;
  animalSexo?: string;
  animalIdClassificacao?: string;
  animalUltimoPeso?: string;
  animalDataUltimapesagem?: string;
  animalListaNegra?: string;
  animal_raza?: string;
  animal_color?: string;
  animal_edad?: string;
  animalProductor_ID?: string;
  animalPropriedad_ID?: string;
  animalMarcaFuego?: string;
  created_at?: any;
  updated_at?: any;

  title: string;
  body: string;
  server_id?: number;
};

export default animalSchema;
