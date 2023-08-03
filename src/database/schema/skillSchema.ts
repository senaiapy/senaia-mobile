/* eslint-disable unicorn/filename-case */
// ########################################

// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################

import { tableSchema } from '@nozbe/watermelondb';

export const skillSchema = tableSchema({
  name: 'skills',
  columns: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'type',
      type: 'string',
    },
  ],
});
