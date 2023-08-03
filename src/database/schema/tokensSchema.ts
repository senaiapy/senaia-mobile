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

const tokensSchema = tableSchema({
  name: 'tokenss',
  columns: [
    { name: 'dbversion', type: 'string' },
    { name: 'tokens_id', type: 'string' },
    { name: 'tokens_wallets_id', type: 'string' },
    { name: 'tokens_name', type: 'string' },
    { name: 'tokens_symbol', type: 'string' },
    { name: 'tokens_type', type: 'string' },
    { name: 'tokens_decimal', type: 'string' },
    { name: 'tokens_balance', type: 'string' },
    { name: 'tokens_price', type: 'string' },
    { name: 'tokens_logo', type: 'string' },
    { name: 'tokens_chain', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { tokensSchema };
