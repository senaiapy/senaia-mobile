/* eslint-disable unicorn/filename-case */
// ########################################

import { tableSchema } from '@nozbe/watermelondb';

const filmSchema = tableSchema({
  name: 'films',
  columns: [
    {
      name: 'adult',
      type: 'boolean',
    },
    {
      name: 'backdrop_path',
      type: 'string',
    },
    {
      name: 'original_language',
      type: 'string',
    },
    {
      name: 'original_title',
      type: 'string',
    },
    {
      name: 'overview',
      type: 'string',
    },
    {
      name: 'popularity',
      type: 'number',
    },
    {
      name: 'poster_path',
      type: 'string',
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'video',
      type: 'boolean',
    },
    {
      name: 'vote_average',
      type: 'number',
    },
    {
      name: 'vote_count',
      type: 'number',
    },
  ],
});

export { filmSchema };
