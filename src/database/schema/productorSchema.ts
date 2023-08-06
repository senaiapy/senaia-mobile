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

const productorSchema = tableSchema({
  name: 'productors',
  columns: [
    { name: 'productorname', type: 'string' },
    { name: 'productor_id', type: 'string' },
    { name: 'productortoken', type: 'string' },
    { name: 'productorsitrap', type: 'string' },
    { name: 'productoracreditacion', type: 'string' },
    { name: 'productor_propriedad_id', type: 'string' },
    { name: 'productorpassword', type: 'string' },
    { name: 'productormail', type: 'string' },
    { name: 'productorphone', type: 'string' },
    { name: 'productorissync', type: 'string' },
    { name: 'dbversion', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

export { productorSchema };
