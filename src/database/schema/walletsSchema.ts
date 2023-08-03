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

const walletsSchema = tableSchema({
  name: 'walletss',
  columns: [
    { name: 'first_name', type: 'string' },
    { name: 'last_name', type: 'string' },
    { name: 'address', type: 'string' },
    { name: 'stateAbbr', type: 'string' },
    { name: 'city', type: 'string' },
    { name: 'zipcode', type: 'string' },
    { name: 'avatar', type: 'string' },
    { name: 'birthday', type: 'string' },
    { name: 'first_seen', type: 'string' },
    { name: 'last_seen', type: 'string' },
    { name: 'has_ordered', type: 'string' },
    { name: 'latest_purchase', type: 'string' },
    { name: 'has_newsletter', type: 'string' },
    { name: 'groups', type: 'string' },
    { name: 'nb_commands', type: 'string' },
    { name: 'total_spent', type: 'string' },
    { name: 'wallets_id', type: 'string' },
    { name: 'wallets_pin', type: 'string' },
    { name: 'wallets_mail', type: 'string' },
    { name: 'wallets_balance', type: 'string' },
    { name: 'wallets_tokens', type: 'string' },
    { name: 'wallets_transactions', type: 'string' },
    { name: 'wallets_messages', type: 'string' },
    { name: 'wallets_card', type: 'string' },
    { name: 'wallets_chatid', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { walletsSchema };
