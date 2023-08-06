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

const frigorificoSchema = tableSchema({
  name: 'frigorificos',
  columns: [
    { name: 'frigorificoname', type: 'string' },
    { name: 'frigorifico_id', type: 'string' },
    { name: 'frigorificodepartamento', type: 'string' },
    { name: 'frigorificokeyprivate', type: 'string' },
    { name: 'frigorificostatus', type: 'string' },
    { name: 'dbversion', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

export { frigorificoSchema };
