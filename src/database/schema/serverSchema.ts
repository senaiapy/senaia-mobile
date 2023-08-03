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

const serverSchema = tableSchema({
  name: 'servers',
  columns: [
    { name: 'serverConfig_name', type: 'string' },
    { name: 'serverConfigId', type: 'string' },
    { name: 'serverConfigLocked', type: 'string' },
    { name: 'serverConfigServerNameLocal', type: 'string' },
    { name: 'serverConfigServerNameRemote', type: 'string' },
    { name: 'serverConfigChatId', type: 'string' },
    { name: 'serverConfig_key', type: 'string' },
    { name: 'serverConfigSendSigor', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { serverSchema };
