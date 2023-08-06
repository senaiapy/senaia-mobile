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

const tecnicoSchema = tableSchema({
  name: 'tecnicos',
  columns: [
    { name: 'tecnicoid', type: 'string' },
    { name: 'tecnicoemail', type: 'string' },
    { name: 'tecnicophone', type: 'string' },
    { name: 'tecnicouniqueid', type: 'string' },
    { name: 'tecnicolocked', type: 'string' },
    { name: 'tecnicoservername', type: 'string' },
    { name: 'tecnico_vpa_id', type: 'string' },
    { name: 'tecnico_name', type: 'string' },
    { name: 'tecnico_register', type: 'string' },
    { name: 'tecnico_password', type: 'string' },
    { name: 'tecnico_mac', type: 'string' },
    { name: 'tecnico_status', type: 'string' },
    { name: 'tecnico_key', type: 'string' },
    { name: 'tecnicoapikeymobile', type: 'string' },
    { name: 'tecnicoapikeysoftware', type: 'string' },
    { name: 'tecnicokeyprivate', type: 'string' },
    { name: 'tecnicolevelaccess', type: 'string' },
    { name: 'tecnicotoken', type: 'string' },
    { name: 'tecnicodevicestatus', type: 'string' },
    { name: 'tecnicoapikeyhardware', type: 'string' },
    { name: 'tecnicopermission', type: 'string' },
    { name: 'tecnicoaddress', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
    { name: 'user_system_type', type: 'string' },
  ],
});

export { tecnicoSchema };
