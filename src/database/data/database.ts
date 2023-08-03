/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-02-09 12:39:09
// ########################################
// #  www.pydoundation.org                #
// #  Eng Marcelo Anjos                   #
// #  marcelu.phd@gmail.com               #
// #  2022-02-10                          #
// ########################################
 * @ Modified time: 2022-02-10 18:52:51
 * @ Description:
 */
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './schema';
import Weight from './weight';

const adapter = new SQLiteAdapter({
  schema,
});

export const database = new Database({
  adapter,
  modelClasses: [Weight],
  // @ts-ignore
  actionsEnabled: true,
});
