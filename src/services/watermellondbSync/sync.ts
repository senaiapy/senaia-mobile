// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-08-17 13:35
// ########################################
// @ Modified time: 2022-08-17 13:03:35

import type { Model } from '@nozbe/watermelondb';
import { Q } from '@nozbe/watermelondb';
import { fetchChildren } from '@nozbe/watermelondb/Model/helpers';

import database from '@/database/index';
import type { SyncAction } from '@/database/model/Action';
import ActionModel from '@/database/model/Action';

import { createCommentApi, createPostApi, deletePostApi } from './apis';

const syncAction = async (action: SyncAction) => {
  const updates: Model[] = [];

  switch (action.type) {
    case 'CREATE_POST': {
      const serverPost = await createPostApi(action.payload);

      const post = (await action.post.fetch())!;

      updates.push(
        post.prepareUpdate((p) => {
          p.title = serverPost.title;
          p.body = serverPost.body;
          p.serverId = serverPost.id;
        })
      );

      break;
    }

    case 'DELETE_POST': {
      const post = (await action.post.fetch())!;

      await deletePostApi(post.serverId!);

      const children = await fetchChildren(post);
      children
        .filter(
          (child) => !(child instanceof ActionModel && child.id === action.id)
        )
        .forEach((child) => {
          updates.push(child.prepareDestroyPermanently());
        });

      updates.push(post.prepareDestroyPermanently());

      break;
    }

    case 'CREATE_COMMENT': {
      const post = (await action.post.fetch())!;
      const comment = (await action.comment.fetch())!;

      const serverComment = await createCommentApi(
        post.serverId!,
        action.payload
      );

      updates.push(
        comment.prepareUpdate((c) => {
          c.body = serverComment.body;
          c.serverId = serverComment.id;
        })
      );

      break;
    }
  }

  updates.push(action.prepareDestroyPermanently());

  await database.write(async () => {
    await database.batch(...updates);
  });
};

const sync = async () => {
  const Actions = database.collections.get<ActionModel>('actions');
  console.log('[sync]', await Actions.query().fetchCount());

  const actions = await Actions.query(Q.take(1)).fetch();
  const action = actions[0];

  if (action) {
    await syncAction(action as SyncAction);
  }
};

const triggerSync = () => {
  // sync();
  // setTimeout(triggerSync, 30 * 1000); // 30 sec
};

export { triggerSync };

export default sync;
