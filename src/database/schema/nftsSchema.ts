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

const nftsSchema = tableSchema({
  name: 'nftss',
  columns: [
    { name: 'dbversion', type: 'string' },
    { name: 'nfts_id', type: 'string' },
    { name: 'nfts_wallets_id', type: 'string' },
    { name: 'nfts_name', type: 'string' },
    { name: 'nfts_value', type: 'string' },
    { name: 'nfts_chain', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { nftsSchema };
