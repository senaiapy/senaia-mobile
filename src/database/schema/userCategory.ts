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

const userCategorySchema = tableSchema({
  name: 'userscategorys',
  columns: [
    { name: 'user_id', type: 'number', isIndexed: true },

    { name: 'key', type: 'number', isOptional: true },
    { name: 'title', type: 'string', isOptional: true },
    { name: 'name', type: 'string', isOptional: true },
    { name: 'address', type: 'string', isOptional: true },
    { name: 'price', type: 'string', isOptional: true },
    { name: 'description', type: 'string', isOptional: true },
    { name: 'photo', type: 'string', isOptional: true },
    { name: 'star', type: 'string', isOptional: true },
    { name: 'reviews', type: 'string', isOptional: true },
    { name: 'category', type: 'string', isOptional: true },
    { name: 'img', type: 'string', isOptional: true },
    { name: 'other', type: 'string', isOptional: true },
    { name: 'dollar', type: 'string', isOptional: true },
    { name: 'cleaner', type: 'string', isOptional: true },

    { name: 'users_category_sync', type: 'boolean', isOptional: true },
    { name: 'server_id', type: 'number', isOptional: true },
  ],
});

export type UserCategoryRaw = {
  user_id?: number;
  key?: number;
  title?: string;
  name?: string;
  address?: string;
  price?: string;
  description?: string;
  photo?: string;
  star?: string;
  reviews?: string;
  category?: string;
  img?: string;
  other?: string;
  dollar?: string;
  cleaner?: string;
  users_category_sync?: boolean;

  server_id?: number;
};

export default userCategorySchema;
