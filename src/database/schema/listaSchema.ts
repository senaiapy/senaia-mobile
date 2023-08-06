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

const listaSchema = tableSchema({
  name: 'listas',
  columns: [
    { name: 'status', type: 'string' },
    { name: 'group', type: 'string' },
    { name: 'id_', type: 'string' },
    { name: 'logo', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'token', type: 'string' },
    { name: 'url', type: 'string' },
    { name: 'modelClass', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

export { listaSchema };
