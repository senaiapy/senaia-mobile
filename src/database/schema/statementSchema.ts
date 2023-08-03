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

const statementSchema = tableSchema({
  name: 'statements',
  columns: [
    { name: 'dbversion', type: 'string' },
    { name: 'data', type: 'string' },
    { name: 'type', type: 'string' },
    { name: 'amount', type: 'string' },
    { name: 'balance', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'total', type: 'string' },
    { name: 'wallets_id', type: 'string' },
    { name: 'customer_id', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { statementSchema };
