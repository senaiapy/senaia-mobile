/* eslint-disable unicorn/filename-case */
// ########################################

import type { RawRecord, Relation } from '@nozbe/watermelondb';
import { associations, Model } from '@nozbe/watermelondb';
import { field, immutableRelation, text } from '@nozbe/watermelondb/decorators';

import type { CommentRaw } from '../schema/comment';
import type PostModel from './Post';

class CommentModel extends Model {
  static table = 'comments';

  static associations = associations(
    ['posts', { type: 'belongs_to', key: 'post_id' }],
    ['actions', { type: 'has_many', foreignKey: 'comment_id' }]
  );

  // @ts-ignore
  _raw!: RawRecord & CommentRaw;

  @text('body')
  body!: string;

  @field('post_id')
  postId!: string;

  @field('server_id')
  serverId?: number;

  @immutableRelation('posts', 'post_id')
  post!: Relation<PostModel>;
}

export default CommentModel;
