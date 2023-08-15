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
 * @ Modified time: 2022-02-10 18:53:03
 * @ Description:
 */
import { Env } from '@env';
import { synchronize } from '@nozbe/watermelondb/sync';

import database from '@/database/index';

//const SYNC_API_URL = 'http://24.199.112.85:3333/sync';
export async function sync() {
  await synchronize({
    database,
    pullChanges: async ({ lastPulledAt, schemaVersion }) => {
      const response = await fetch(
        //      const urlParams = `last_pulled_at=${lastPulledAt}&schema_version=${schemaVersion}&migration=${encodeURIComponent(JSON.stringify(migration))}`
        `${Env.SYNC_API_URL}?lastPulledAt=${lastPulledAt}&schema_version=${schemaVersion}`
      );
      if (!response.ok) {
        throw new Error(await response.text());
      }

      const { changes, timestamp } = await response.json();
      return { changes, timestamp };
    },
    pushChanges: async ({ changes, lastPulledAt }) => {
      const response = await fetch(Env.SYNC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ changes, lastPulledAt }),
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }
    },
  });
}
