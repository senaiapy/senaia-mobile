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

const localDbSchema = tableSchema({
  name: 'localdbs',
  columns: [
    { name: 'userId', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'password', type: 'string' },
    { name: 'firstname', type: 'string' },
    { name: 'lastname', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'role', type: 'string' },
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
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

export { localDbSchema };
