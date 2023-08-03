/* eslint-disable unicorn/filename-case */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
//* @ Create Time: 2022-08-04 12:39:09
// ########################################

import { tableSchema } from '@nozbe/watermelondb';

const coibfeActionSchema = tableSchema({
  name: 'coibfeactions',
  columns: [
    { name: 'post_id', type: 'string', isIndexed: true, isOptional: true },
    { name: 'comment_id', type: 'string', isIndexed: true, isOptional: true },
    { name: 'type', type: 'string' },
    { name: 'payload', type: 'string', isOptional: true },
  ],
});

export type CoibfeActionRaw = {
  post_id?: string;
  comment_id?: string;
  type: string;
  payload?: string;
};

export default coibfeActionSchema;
