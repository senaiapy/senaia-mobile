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

const customerSchema = tableSchema({
  name: 'customers',
  columns: [
    { name: 'customerId', type: 'string' },
    { name: 'customerEmail', type: 'string' },
    { name: 'customerPhone', type: 'string' },
    { name: 'customerUniqueId', type: 'string' },
    { name: 'customerLocked', type: 'string' },
    { name: 'customerServerName', type: 'string' },
    { name: 'customer_vpa_id', type: 'string' },
    { name: 'customer_name', type: 'string' },
    { name: 'customer_register', type: 'string' },
    { name: 'customer_password', type: 'string' },
    { name: 'customer_mac', type: 'string' },
    { name: 'customer_status', type: 'string' },
    { name: 'customer_key', type: 'string' },
    { name: 'customerApiKeyMobile', type: 'string' },
    { name: 'customerApiKeySoftware', type: 'string' },
    { name: 'customerKeyPrivate', type: 'string' },
    { name: 'customerLevelAccess', type: 'string' },
    { name: 'customerToken', type: 'string' },
    { name: 'customerDeviceStatus', type: 'string' },
    { name: 'customerApiKeyHardware', type: 'string' },
    { name: 'customerPermission', type: 'string' },
    { name: 'customerAddress', type: 'string' },
    { name: 'avatar_id', type: 'string' },
    { name: 'avatar_face', type: 'string' },
    { name: 'wallet_id', type: 'string' },
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
    { name: 'has_ordered', type: 'boolean' },
    { name: 'latest_purchase', type: 'string' },
    { name: 'has_newsletter', type: 'boolean' },
    { name: 'groups', type: 'string' },
    { name: 'nb_commands', type: 'string' },
    { name: 'total_spent', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

export { customerSchema };
