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

const authenticateSchema = tableSchema({
  name: 'authenticates',
  columns: [
    { name: 'userId', type: 'string' },
    { name: 'user_vpa_id', type: 'string' },
    { name: 'user_name', type: 'string' },
    { name: 'user_password', type: 'string' },
    { name: 'user_mac', type: 'string' },
    { name: 'user_status', type: 'string' },
    { name: 'user_key', type: 'string' },
    { name: 'userToken', type: 'string' },
    { name: 'user_register', type: 'string' },
    { name: 'userChatId', type: 'string' },
    { name: 'userDeviceStatus', type: 'string' },
    { name: 'userKeyPrivate', type: 'string' },
    { name: 'userApiKeyHardware', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { authenticateSchema };
