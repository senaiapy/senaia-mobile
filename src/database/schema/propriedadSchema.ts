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

const propriedadSchema = tableSchema({
  name: 'propriedads',
  columns: [
    { name: 'propriedadname', type: 'string' },
    { name: 'propriedadpropietario', type: 'string' },
    { name: 'propriedadstatus', type: 'string' },
    { name: 'propriedadsigor', type: 'string' },
    { name: 'propriedadsitrap', type: 'string' },
    { name: 'propriedaddepartamento', type: 'string' },
    { name: 'propriedaddistrito', type: 'string' },
    { name: 'dbversion', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

export { propriedadSchema };
