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

//const SYNC_API_URL = 'http://24.199.112.85:3333/sync';
export async function server() {
  return await fetch(Env.SYNC_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
}
