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

const addressSchema = tableSchema({
  name: 'addresss',
  columns: [
    { name: 'street', type: 'string' },
    { name: 'number', type: 'string' },
    { name: 'district', type: 'string' },
    { name: 'obs', type: 'string' },
    { name: 'country', type: 'string' },
    { name: 'zip', type: 'string' },
    { name: 'customerId', type: 'string' },
    { name: 'tecnicoId', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { addressSchema };
