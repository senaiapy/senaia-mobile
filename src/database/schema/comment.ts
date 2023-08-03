// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
//* @ Create Time: 2022-08-04 12:39:09
// ########################################

import { tableSchema } from '@nozbe/watermelondb';

const commentSchema = tableSchema({
  name: 'comments',
  columns: [
    { name: 'body', type: 'string' },
    { name: 'post_id', type: 'string', isIndexed: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type CommentRaw = {
  body: string;
  post_id: string;
  server_id?: number;
};

export default commentSchema;
