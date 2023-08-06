/* eslint-disable unicorn/filename-case */
// ########################################
export interface ServerDTO {
  serverConfig_name: string;
  serverConfigId: string;
  serverConfigLocked: string;
  serverConfigServerNameLocal: string;
  serverConfigServerNameRemote: string;
  serverConfigChatId: string;
  serverConfig_key: string;
  serverConfigSendSigor: string;

  dbversion: string;
  created_at?: any;
  updated_at?: any;
}
