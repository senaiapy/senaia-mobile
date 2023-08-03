/* eslint-disable unicorn/filename-case */
// ########################################
/*
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-02-08 21:08:37
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:54:28
 * @ Description:
 */

export interface UserDTO {
  userId: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  name: string;
  role: string;
  user_vpa_id: string;
  user_name: string;
  user_password: string;
  user_mac: string;
  user_status: string;
  user_key: string;
  userToken: string;
  user_register: string;
  userChatId: string;
  userDeviceStatus: string;
  userKeyPrivate: string;
  userApiKeyHardware: string;
  createdAt: any;
  updatedAt: any;
  user_system_type?: string;
}
