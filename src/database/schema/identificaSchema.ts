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

const identificaSchema = tableSchema({
  name: 'identificas',
  columns: [
    { name: 'identificaId', type: 'string' },
    { name: 'identificaUniqueId', type: 'string' },
    { name: 'identificaIdAnimal', type: 'string' },
    { name: 'identificaNroTag', type: 'string' },
    { name: 'identificaIdTecnico', type: 'string' },
    { name: 'identificaNumeroIdentificador', type: 'string' },
    { name: 'identificaDataNascimento', type: 'string' },
    { name: 'identificaSexo', type: 'string' },
    { name: 'identificaIdRaca', type: 'string' },
    { name: 'identificaMarcaFogo', type: 'string' },
    { name: 'identificaLatitude', type: 'string' },
    { name: 'identificaLongitude', type: 'string' },
    { name: 'identificaCarimbo', type: 'string' },
    { name: 'identificaLoteVacina', type: 'string' },
    { name: 'identificaPeso', type: 'string' },
    { name: 'identificaCodErro', type: 'string' },
    { name: 'identificaDataIdentificacao', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },

    { name: 'title', type: 'string' },
    { name: 'body', type: 'string', isOptional: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type IdentificaRaw = {
  dbversion?: string;
  identificaId?: string;
  identificaUniqueId: string;
  identifica_company?: string;
  identificaIdAnimal?: string;
  identificaNroTag?: string;
  identificaIdTecnico?: string;
  identificaNumeroIdentificador?: string;
  identificaDataNascimento?: string;
  identificaSexo?: string;
  identificaIdRaca?: string;
  identificaMarcaFogo?: string;
  identificaLatitude?: string;
  identificaLongitude?: string;
  identificaCarimbo?: string;
  identificaLoteVacina?: string;
  identificaPeso?: string;
  identificaCodErro?: string;
  identificaDataIdentificacao?: string;
  createdAt: any;
  updatedAt: any;

  title: string;
  body: string;
  server_id?: number;
};

export default identificaSchema;
